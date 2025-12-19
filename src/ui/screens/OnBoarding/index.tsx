import { OnboardStack } from '@app/navigation/OnboardStack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { OnboardProvider } from './context/OnBoardProvider';
import { OnboardHeader } from './components/OnboardHeader';
import { FormProvider, useForm } from 'react-hook-form';
import { onboardingSchema, OnboardingSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function OnBoarding() {
    const form = useForm<OnboardingSchema>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            weight: '',
            height: '',
            birthDate: new Date(),
            account: {
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
            },
        },
    });

    return (
        <OnboardProvider>
            <OnboardHeader />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <FormProvider {...form}>
                    <OnboardStack />
                </FormProvider>
            </KeyboardAvoidingView>
        </OnboardProvider>
    );
}
