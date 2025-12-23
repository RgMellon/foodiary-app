import { AppText } from '@ui/components/AppText';
import { View } from 'react-native';

export function Home() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'red' }}>
            <AppText> OI </AppText>
        </View>
    );
}
