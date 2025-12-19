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
import { GenderOptions } from '@app/types/GenderOptions';
import { Controller, useFormContext } from 'react-hook-form';
import { OnboardingSchema } from '../schema';

export function Gender() {
    const { nextStep } = useOnboard();
    const form = useFormContext<OnboardingSchema>();

    async function handleNextStep() {
        const isValid = await form.trigger('gender');
        if (isValid) {
            nextStep();
        }
    }

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual seu gênero?</StepTitle>
                <StepSubTitle>
                    Seu gênero influencia no tipo da dieta
                </StepSubTitle>
            </StepHeader>
            <StepContent>
                <Controller
                    name="gender"
                    control={form.control}
                    render={({ field: { onChange, value }, fieldState }) => (
                        <RadioGroup
                            orientation="horizontal"
                            onChangeValue={(value) => {
                                onChange(value);
                                form.trigger('gender');
                            }}
                            error={!!fieldState.error}
                            value={value}
                        >
                            <RadioGroupItem value={GenderOptions.MALE}>
                                <RadioGroupIcon> 👨 </RadioGroupIcon>
                                <RadioGroupLabel> Masculino </RadioGroupLabel>
                            </RadioGroupItem>

                            <RadioGroupItem value={GenderOptions.FEMALE}>
                                <RadioGroupIcon> 👩 </RadioGroupIcon>
                                <RadioGroupLabel> Feminio </RadioGroupLabel>
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
