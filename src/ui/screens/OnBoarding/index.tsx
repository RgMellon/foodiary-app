import { OnboardStack } from '@app/navigation/OnboardStack';
import { View } from 'react-native';
import { OnboardProvider } from './context/OnBoardProvider';
import { OnboardHeader } from './components/OnboardHeader';

export function OnBoarding() {

    return (
        <OnboardProvider>
            <View style={{ flex: 1 }}>
                <OnboardHeader />
                <OnboardStack />
            </View>
        </OnboardProvider>
    );
}
