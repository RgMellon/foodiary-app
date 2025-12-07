import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Greetings } from '@ui/screens/Greetings';
import { OnBoarding } from '@ui/screens/OnBoarding';

type AuthStackParamList = {
    Greetings: undefined
    OnBoarding: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackNavigationprops = NativeStackNavigationProp<AuthStackParamList>
export type AuthStackScreenProps<TName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, TName>

export function AuthStack() {
    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='Greetings' component={Greetings}/>
         <Stack.Screen name='OnBoarding' component={OnBoarding}/>
    </Stack.Navigator>;
}
