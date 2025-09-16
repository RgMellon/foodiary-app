import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_700Bold,
    HostGrotesk_600SemiBold,
    useFonts,
} from "@expo-google-fonts/host-grotesk";

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
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
