import { OnboardStackParamList } from '@app/navigation/OnboardStack';

export const orderStep: ( keyof OnboardStackParamList)[] = [
    'Goal',
    'Gender',
    'BirthDate',
    'Height',
    'Weight',
    'ActivityLevel',
    'CreateAccount',
];

export const totalSteps = orderStep.length;
