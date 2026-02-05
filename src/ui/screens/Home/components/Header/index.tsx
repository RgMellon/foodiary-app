import { View } from 'react-native';
import { UserInfo } from '../UserInfo';
import { styles } from './styles';
import { SwitchDate } from '../SwitchDate';
import { CurrentGoal } from '../CurrentGoal';
import { AppText } from '@ui/components/AppText';

export function Header() {
    return (
        <View>
            <UserInfo />
            <View style={styles.content}>
                <SwitchDate />
                <CurrentGoal />

                <View style={styles.divider}/>
                <AppText weight='medium' style={styles.title}>REFEIÇÕES</AppText>
            </View>
        </View>
    );
}
