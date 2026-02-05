import { View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './styles';
import { theme } from '@ui/styles/theme';
import { CreateMealOptions } from '../CreateMealOptions';

export function EmptyState() {
    return <View style={styles.container}>
        <AppText color={theme.colors.gray[700]}>Cadastre sua primeira refeição através de uma das opções abaixo</AppText>;

        <CreateMealOptions />
    </View>;
}
