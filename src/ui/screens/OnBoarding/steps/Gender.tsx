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

enum GenderOptions {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export function Gender() {
    const { nextStep } = useOnboard();

    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual seu gênero?</StepTitle>
                <StepSubTitle>
                   Seu gênero influencia no tipo da dieta
                </StepSubTitle>
            </StepHeader>
            <StepContent>
                <RadioGroup orientation="horizontal">
                    <RadioGroupItem value={GenderOptions.MALE}>
                        <RadioGroupIcon> 👨 </RadioGroupIcon>
                        <RadioGroupLabel> Masculino </RadioGroupLabel>
                    </RadioGroupItem>

                    <RadioGroupItem value={GenderOptions.FEMALE}>
                        <RadioGroupIcon> 👩 </RadioGroupIcon>
                        <RadioGroupLabel> Feminio </RadioGroupLabel>
                    </RadioGroupItem>
                </RadioGroup>
            </StepContent>

            <StepFooter>
                <Button size="icon" onPress={nextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
