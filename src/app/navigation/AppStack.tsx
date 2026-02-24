import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home } from '@ui/screens/Home';
import { MealDetail } from '@ui/screens/MealDetail';

type AppStackParamList = {
    Home: undefined;
    MealDetail: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackNavigationprops = NativeStackNavigationProp<AppStackParamList>
export type AppStackScreenProps<TName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, TName>

export function AppStack() {
    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MealDetail' component={MealDetail}/>
    </Stack.Navigator>;
}
