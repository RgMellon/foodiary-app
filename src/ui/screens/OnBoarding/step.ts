import { OnboardStackParamList } from '@app/navigation/OnboardStack';

export const orderStep: ( keyof OnboardStackParamList)[] = [
    'Goal',
    'Gender',
    'BirthDate',
    'Weight',
    'Height',
    'ActivityLevel',
    'CreateAccount',
];

export const totalSteps = orderStep.length;
