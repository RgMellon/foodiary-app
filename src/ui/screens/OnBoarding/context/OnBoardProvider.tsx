import { useCallback, useState } from 'react';
import { OnboardContext } from '.';
import { orderStep } from '../step';
import { onBoardNavigation } from '@app/navigation/OnboardStack';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationprops } from '@app/navigation/AuthStack';

export function OnboardProvider({ children }: {children: React.ReactNode}) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const { goBack } = useNavigation<AuthStackNavigationprops>();

    const nextStep = useCallback(() => {
        const nextStepIndex = currentStepIndex +1;
        const nextStep = orderStep[nextStepIndex];

        if(!nextStep) {
            return;
        }

        setCurrentStepIndex(nextStepIndex);
        onBoardNavigation.navigate(nextStep);

    }, [currentStepIndex]);

    const prevStep = useCallback(() => {
         const prevStepIndex = currentStepIndex -1;

         if(!onBoardNavigation.canGoBack()) {
            goBack();
            return;
        }

        setCurrentStepIndex(prevStepIndex);
        onBoardNavigation.goBack();
    }, [currentStepIndex]);

    return <OnboardContext.Provider value={{ currentStepIndex, nextStep, prevStep }}>
        {children}
    </OnboardContext.Provider>;
}
