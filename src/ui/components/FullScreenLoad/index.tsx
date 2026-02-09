import { styles } from './style';
import { Logo } from '../Logo';
import { ActivityIndicator, View } from 'react-native';
import { theme } from '@ui/styles/theme';

export function FullScreenLoad() {
    return (
        <View style={styles.container}>
            <Logo width={187} height={60} />
            <ActivityIndicator
                size={'large'}
                color={theme.colors.support.yellow}
            />
        </View>
    );
}
