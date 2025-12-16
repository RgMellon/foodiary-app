import { OnboardStack } from '@app/navigation/OnboardStack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { OnboardProvider } from './context/OnBoardProvider';
import { OnboardHeader } from './components/OnboardHeader';

export function OnBoarding() {
    return (
        <OnboardProvider>
            <OnboardHeader />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <OnboardStack />
            </KeyboardAvoidingView>
        </OnboardProvider>
    );
}
