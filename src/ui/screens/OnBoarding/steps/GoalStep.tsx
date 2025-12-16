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

enum Goal {
    GAIN = 'GAIN',
    LOSE = 'LOSE',
    MAINTAIN = 'MAINTAIN',
}

export function GoalStep() {
    const { nextStep } = useOnboard();
    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual seu objetivo?</StepTitle>
                <StepSubTitle>
                    O que você pretende alcançar com a dieta?
                </StepSubTitle>
            </StepHeader>
            <StepContent>
                <RadioGroup orientation='vertical'>
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
            </StepContent>
            <StepFooter>
                <Button size="icon" onPress={nextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
