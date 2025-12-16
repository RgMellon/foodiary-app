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

export function Height() {
    const { nextStep } = useOnboard();

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual a sua altura?</StepTitle>
                <StepSubTitle>Você pode inserir uma estimativa</StepSubTitle>
            </StepHeader>
            <StepContent position="center">
                <FormGroup label="Altura" style={{ width: '100%' }}>
                    <Input
                        formatter={toDecimal}
                        placeholder="Sua altura em cm"
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
