import { View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './styles';
import { theme } from '@ui/styles/theme';
import { CreateMealOptions } from '../CreateMealOptions';
import { useHome } from '@app/context/HomeContext/useHome';

export function EmptyState() {
    const { isFetching } = useHome();

    return (
        <View style={[styles.container, { opacity: isFetching ? 0.5 : 1 }]}>
            <AppText color={theme.colors.gray[700]}>
                Cadastre sua primeira refeição através de uma das opções abaixo
            </AppText>

            <CreateMealOptions />
        </View>
    );
}
