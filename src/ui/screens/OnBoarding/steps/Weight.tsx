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

export function Weight() {
    const { nextStep } = useOnboard();

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual o seu peso?</StepTitle>
            </StepHeader>

            <StepContent position="center">
                <FormGroup label="Peso" style={{ width: '100%' }}>
                    <Input
                        placeholder="80"
                        keyboardType="numeric"
                    />
                </FormGroup>
            </StepContent>

            <StepFooter>
                <Button size="icon" onPress={nextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
