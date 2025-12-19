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
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import { toDecimal } from '@app/utils/formatters/toDecimal';
import { Controller, useFormContext } from 'react-hook-form';
import { OnboardingSchema } from '../schema';

export function Height() {
    const { nextStep } = useOnboard();
    const form = useFormContext<OnboardingSchema>();

    async function handleNextStep() {
        const isValid = await form.trigger('height');

        if (isValid) {
            nextStep();
        }
    }

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual a sua altura?</StepTitle>
                <StepSubTitle>Você pode inserir uma estimativa</StepSubTitle>
            </StepHeader>
            <Controller
                name="height"
                render={({ field, fieldState }) => (
                    <StepContent position="center">
                        <FormGroup
                            label="Altura"
                            error={fieldState.error?.message}
                            style={{ width: '100%' }}
                        >
                            <Input
                                onChangeText={field.onChange}
                                value={field.value}
                                formatter={toDecimal}
                                placeholder="Sua altura em cm"
                                keyboardType="numeric"
                            />
                        </FormGroup>
                    </StepContent>
                )}
            />

            <StepFooter>
                <Button size="icon" onPress={handleNextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
