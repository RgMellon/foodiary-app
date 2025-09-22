import {
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_700Bold,
    HostGrotesk_600SemiBold,
    useFonts,
} from '@expo-google-fonts/host-grotesk';
import { Greetings } from '@ui/screens/Greetings';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function App() {
    const [isFontsLoaded] = useFonts({
        HostGrotesk_400Regular,
        HostGrotesk_500Medium,
        HostGrotesk_700Bold,
        HostGrotesk_600SemiBold,
    });

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <Greetings />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
