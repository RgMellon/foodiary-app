import { View } from 'react-native';
import { style } from './styles';
import { AppText } from '../AppText';
import { theme } from '@ui/styles/theme';
import { Meal } from '@app/types/Meal';
import { useHome } from '@app/context/HomeContext/useHome';

interface IMealCard {
    meal: Meal;
}

export function MealCard({ meal }: IMealCard) {
    const { isFetching } = useHome();

    return (
        <View style={[style.container, { opacity: isFetching ? 0.5 : 1 }]}>
            <AppText>{formatTime(meal.createdAt)}</AppText>

            <Card name={meal.name} icon={meal.icon} foods={meal.foods} />
        </View>
    );
}

interface IOption {
    foods: {
        name: string;
        calories: number;
        fat: number;
        proteins: number;
        carbohydrates: number;
        quantity: string;
    }[];
    name: string;
    icon: string;
}

function Card({ foods, name, icon }: IOption) {
    const formatedFoods = foods.map((food) => food.name).join(', ');

    const summary = foods.reduce(
        (acc, food) => {
            acc.calories += food.calories;
            acc.fat += food.fat;
            acc.proteins += food.proteins;
            acc.carbohydrates += food.carbohydrates;
            return acc;
        },
        {
            calories: 0,
            fat: 0,
            proteins: 0,
            carbohydrates: 0,
        },
    );

    return (
        <View style={style.card}>
            <View style={style.header}>
                <View style={style.icon}>
                    <AppText>{icon}</AppText>
                </View>
                <View>
                    <AppText weight="bold" color={theme.colors.gray[600]}>
                        {name}
                    </AppText>
                    <AppText weight="bold">{formatedFoods}</AppText>
                </View>
            </View>

            <View style={style.content}>
                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.red}>
                        {summary.calories}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Kcal
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.green}>
                        {summary.proteins}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Proteinas
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.ambar}>
                        {summary.carbohydrates}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Carboidratos
                    </AppText>
                </View>

                <View style={style.info}>
                    <AppText weight="bold" color={theme.colors.support.yellow}>
                        {summary.fat}
                    </AppText>
                    <AppText size="sm" color={theme.colors.gray[600]}>
                        Gordura
                    </AppText>
                </View>
            </View>
        </View>
    );
}

function formatTime(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getHours().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}
