import { View } from 'react-native';
import { UserInfo } from '../UserInfo';
import { styles } from './styles';
import { SwitchDate } from '../SwitchDate';
import { CurrentGoal } from '../CurrentGoal';
import { AppText } from '@ui/components/AppText';
import { useAccount } from '@app/hooks/query/useAccount';
import { useHome } from '@app/context/HomeContext/useHome';

export function Header() {
    const { account } = useAccount();
    const { meals } = useHome();

    const summary = meals
        .flatMap((meal) => meal.foods)
        .reduce(
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
        <View>
            <UserInfo />
            <View style={styles.content}>
                <SwitchDate />
                <CurrentGoal
                    calories={{
                        goal: Number(account?.goal.calories) || 0,
                        current: summary.calories,
                    }}
                    carbohydrates={{
                        goal: Number(100),
                        current: summary.carbohydrates,
                    }}
                    proteins={{
                        goal: Number(account?.goal.proteins) || 0,
                        current: summary.proteins,
                    }}
                    fats={{
                        goal: Number(account?.goal.fat) || 0,
                        current: summary.fat,
                    }}
                />

                <View style={styles.divider} />
                <AppText weight="medium" style={styles.title}>
                    REFEIÇÕES
                </AppText>
            </View>
        </View>
    );
}
