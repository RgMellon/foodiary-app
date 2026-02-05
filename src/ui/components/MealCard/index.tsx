import { View } from 'react-native';
import { style } from './styles';
import { AppText } from '../AppText';
import { theme } from '@ui/styles/theme';

export function MealCard() {
    return (
        <View style={style.container}>
            <AppText>12h15</AppText>

            <Card protein={200} fat={100} carb={50} cal={20} />
        </View>
    );
}

interface IOption {
    protein: number;
    fat: number;
    carb: number;
    cal: number;
}

function Card({ cal, carb, fat, protein }: IOption) {
    return (
        <View style={style.card}>
            <View style={style.header}>
                <View style={style.icon}>
                    <AppText>🍞</AppText>
                </View>
                <View>
                    <AppText weight="bold" color={theme.colors.gray[600]}>
                        Café da manhã{' '}
                    </AppText>
                    <AppText weight="bold">Pão, Manteiga e café</AppText>
                </View>
            </View>

            <View style={style.content}>
                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.red}>
                        {cal}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Kcal
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.green}>
                        {protein}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Proteinas
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.ambar}>
                        {carb}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Carboidratos
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.yellow}>
                        {fat}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Gordura
                    </AppText>
                </View>
            </View>
        </View>
    );
}
