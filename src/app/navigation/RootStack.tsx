import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '@app/context/AuthContext/useAuth';

type RootStackParamList = {
    App: undefined;
    Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackNavigationprops =
    NativeStackNavigationProp<RootStackParamList>;
export type RootStackScreenProps<TName extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, TName>;

export function RootStack() {
    const { signedIn } = useAuth();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {signedIn && <Stack.Screen name="App" component={AppStack} />}

            {!signedIn && (
                <Stack.Screen
                    name="Auth"
                    options={{
                        animationTypeForReplace: 'pop',
                    }}
                    component={AuthStack}
                />
            )}
        </Stack.Navigator>
    );
}
