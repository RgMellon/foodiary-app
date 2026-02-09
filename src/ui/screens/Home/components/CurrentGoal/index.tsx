import { View } from 'react-native';
import { styles } from './styles';
import { GoalStats } from '@ui/components/GoalStats';
import { MacroProgress } from '@ui/components/GoalStats/types';

interface ICurrentGoalProps {
    calories: MacroProgress;
    carbohydrates: MacroProgress;
    proteins: MacroProgress;
    fats: MacroProgress;
}

export function CurrentGoal({
    calories,
    carbohydrates,
    fats,
    proteins,
}: ICurrentGoalProps) {
    return (
        <View style={styles.container}>
            <GoalStats
                calories={calories}
                carbohydrates={carbohydrates}
                proteins={proteins}
                fats={fats}
            />
        </View>
    );
}
