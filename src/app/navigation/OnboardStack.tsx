import {
    createNavigationContainerRef,
    NavigationContainer,
    NavigationIndependentTree,
} from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { ActivityLevel } from '@ui/screens/OnBoarding/steps/ActivityLevel';
import { BirthDate } from '@ui/screens/OnBoarding/steps/BirthDate';
import { CreateAccount } from '@ui/screens/OnBoarding/steps/CreateAccount';
import { Gender } from '@ui/screens/OnBoarding/steps/Gender';
import { GoalStep } from '@ui/screens/OnBoarding/steps/GoalStep';
import { Height } from '@ui/screens/OnBoarding/steps/Height';
import { Weight } from '@ui/screens/OnBoarding/steps/Weight';

export type OnboardStackParamList = {
    Goal: undefined;
    Gender: undefined;
    BirthDate: undefined;
    Height: undefined;
    Weight: undefined;
    ActivityLevel: undefined;
    CreateAccount: undefined;
};

const Stack = createNativeStackNavigator<OnboardStackParamList>();

export type OnboardStackNavigationprops =
    NativeStackNavigationProp<OnboardStackParamList>;

export type OnboardStackScreenProps<TName extends keyof OnboardStackParamList> =
    NativeStackScreenProps<OnboardStackParamList, TName>;

export const onBoardNavigation =
    createNavigationContainerRef<OnboardStackParamList>();

export function OnboardStack() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer ref={onBoardNavigation}>
                <Stack.Navigator
                    initialRouteName="ActivityLevel"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="ActivityLevel"
                        component={ActivityLevel}
                    />
                    <Stack.Screen name="BirthDate" component={BirthDate} />
                    <Stack.Screen
                        name="CreateAccount"
                        component={CreateAccount}
                    />
                    <Stack.Screen name="Gender" component={Gender} />
                    <Stack.Screen name="Goal" component={GoalStep} />
                    <Stack.Screen name="Height" component={Height} />
                    <Stack.Screen name="Weight" component={Weight} />
                </Stack.Navigator>
                ;
            </NavigationContainer>
            ;
        </NavigationIndependentTree>
    );
}
