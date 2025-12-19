import React from 'react';
import {
    Step,
    StepContent,
    StepFooter,
    StepHeader,
    StepTitle,
} from '../components/Step';
import { Button } from '@ui/components/Button';
import { ArrowRight } from 'lucide-react-native';
import { useOnboard } from '../context/useOnboard';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import { OnboardingSchema } from '../schema';
import { Controller, useFormContext } from 'react-hook-form';

export function Weight() {
    const { nextStep } = useOnboard();
    const form = useFormContext<OnboardingSchema>();

    async function handleNextStep() {
        const isValid = await form.trigger('weight');

        if (isValid) {
            nextStep();
        }
    }

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual o seu peso?</StepTitle>
            </StepHeader>

            <StepContent position="center">
                <Controller
                    name="weight"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <FormGroup
                            error={fieldState.error?.message}
                            label="Peso"
                            style={{ width: '100%' }}
                        >
                            <Input
                                value={field.value}
                                onChangeText={field.onChange}
                                placeholder="80"
                                keyboardType="numeric"
                            />
                        </FormGroup>
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
