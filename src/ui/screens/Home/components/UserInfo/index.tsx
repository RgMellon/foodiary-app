import { View } from 'react-native';
import { styles } from './styles';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { useAccount } from '@app/hooks/query/useAccount';
import { Button } from '@ui/components/Button';
import { TargetIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationprops } from '@app/navigation/AppStack';

export function UserInfo() {
    const { account } = useAccount();
    const navigation = useNavigation<AppStackNavigationprops>();

    const handleGoalsPress = () => {
        navigation.navigate('Goals');
    };

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.avatar}>
                    <AppText color={theme.colors.gray[100]} weight="bold">
                        {account?.profile.name.slice(0, 1).toUpperCase()}
                    </AppText>
                </View>
                <View style={styles.greetings}>
                    <AppText color={theme.colors.gray[700]}>Olá, 👋</AppText>
                    <AppText weight="bold">{account?.profile.name}</AppText>
                </View>
            </View>

            <View>
                <Button variant='ghost' leftIcon={TargetIcon} onPress={handleGoalsPress}>Metas</Button>
            </View>
        </View>
    );
}
