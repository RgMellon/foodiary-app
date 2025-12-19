import React from 'react';
import {
    Step,
    StepContent,
    StepFooter,
    StepHeader,
    StepSubTitle,
    StepTitle,
} from '../components/Step';
import { Button } from '@ui/components/Button';
import { ArrowRight } from 'lucide-react-native';
import { useOnboard } from '../context/useOnboard';
import {
    RadioGroup,
    RadioGroupIcon,
    RadioGroupItem,
    RadioGroupLabel,
} from '@ui/components/RadioGroup';
import { Goal } from '@app/types/Goal';
import { Controller, useFormContext } from 'react-hook-form';
import { OnboardingSchema } from '../schema';

export function GoalStep() {
    const { nextStep } = useOnboard();
    const form = useFormContext<OnboardingSchema>();

    async function handleNextStep() {
        const isValid = await form.trigger('goal');

        if (isValid) {
            nextStep();
        }
    }

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual seu objetivo?</StepTitle>
                <StepSubTitle>
                    O que você pretende alcançar com a dieta?
                </StepSubTitle>
            </StepHeader>
            <StepContent>
                <Controller
                    name={'goal'}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <RadioGroup
                            error={!!fieldState.error?.message}
                            orientation="vertical"
                            onChangeValue={(value) => {
                                field.onChange(value);
                                form.trigger('goal');
                            }}
                            value={field.value}
                        >
                            <RadioGroupItem value={Goal.LOSE}>
                                <RadioGroupIcon>🥦</RadioGroupIcon>
                                <RadioGroupLabel> Perder peso </RadioGroupLabel>
                            </RadioGroupItem>

                            <RadioGroupItem value={Goal.MAINTAIN}>
                                <RadioGroupIcon>🍍</RadioGroupIcon>
                                <RadioGroupLabel> Manter peso </RadioGroupLabel>
                            </RadioGroupItem>

                            <RadioGroupItem value={Goal.GAIN}>
                                <RadioGroupIcon>🥩</RadioGroupIcon>
                                <RadioGroupLabel> Ganhar peso </RadioGroupLabel>
                            </RadioGroupItem>
                        </RadioGroup>
                    )}
                />
            </StepContent>
            <StepFooter>
                <Button size="icon" onPress={handleNextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
