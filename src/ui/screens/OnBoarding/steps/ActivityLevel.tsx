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
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupIcon,
    RadioGroupItem,
    RadioGroupLabel,
    RadiouGroupItemWrapper,
} from '@ui/components/RadioGroup';

enum ActivityLevelOptions {
    SEDENTARY = 'SEDENTARY',
    LIGHT = 'LIGHT',
    MODERATED = 'MODERATED',
    HEAVY = 'HEAVY',
    ATHLETE = 'ATHLETE',
}

export function ActivityLevel() {
    const { nextStep } = useOnboard();
    return (
        <Step>
            <StepHeader>
                <StepTitle>Qual o seu nível de atividade ?</StepTitle>
            </StepHeader>
            <StepContent>
                <RadioGroup orientation="vertical">
                    <RadioGroupItem value={ActivityLevelOptions.SEDENTARY}>
                        <RadioGroupIcon>🛋️</RadioGroupIcon>
                        <RadiouGroupItemWrapper>
                            <RadioGroupLabel>Sedentario</RadioGroupLabel>
                            <RadioGroupDescription>
                                1 a 2 vezes por semana
                            </RadioGroupDescription>
                        </RadiouGroupItemWrapper>
                    </RadioGroupItem>

                    <RadioGroupItem value={ActivityLevelOptions.LIGHT}>
                        <RadioGroupIcon>🥬</RadioGroupIcon>
                        <RadiouGroupItemWrapper>
                            <RadioGroupLabel>Leve</RadioGroupLabel>
                            <RadioGroupDescription>
                                3 a 5 vezes por semana
                            </RadioGroupDescription>
                        </RadiouGroupItemWrapper>
                    </RadioGroupItem>

                    <RadioGroupItem value={ActivityLevelOptions.MODERATED}>
                        <RadioGroupIcon>⚡️</RadioGroupIcon>
                        <RadiouGroupItemWrapper>
                            <RadioGroupLabel>Moderado</RadioGroupLabel>
                            <RadioGroupDescription>
                                3 a 5 vezes por semana
                            </RadioGroupDescription>
                        </RadiouGroupItemWrapper>
                    </RadioGroupItem>

                    <RadioGroupItem value={ActivityLevelOptions.HEAVY}>
                        <RadioGroupIcon>🔥</RadioGroupIcon>
                        <RadiouGroupItemWrapper>
                            <RadioGroupLabel>Pesado</RadioGroupLabel>
                            <RadioGroupDescription>
                                6 a 7 vezes por semana
                            </RadioGroupDescription>
                        </RadiouGroupItemWrapper>
                    </RadioGroupItem>

                    <RadioGroupItem value={ActivityLevelOptions.ATHLETE}>
                        <RadioGroupIcon>🏋️</RadioGroupIcon>
                        <RadiouGroupItemWrapper>
                            <RadioGroupLabel>Atleta</RadioGroupLabel>
                            <RadioGroupDescription>
                                Todos os dias
                            </RadioGroupDescription>
                        </RadiouGroupItemWrapper>
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
