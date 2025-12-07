import { createContext } from 'react';

type OnboardContextValue = {
    currentStepIndex: number;
    nextStep: () => void;
    prevStep: () => void;
}

export const OnboardContext = createContext({} as OnboardContextValue);
