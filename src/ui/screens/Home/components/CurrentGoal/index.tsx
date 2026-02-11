import { View } from 'react-native';
import { styles } from './styles';
import { GoalStats } from '@ui/components/GoalStats';
import { MacroProgress } from '@ui/components/GoalStats/types';
import { useHome } from '@app/context/HomeContext/useHome';

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
    const { isFetching } = useHome();
    return (
        <View style={[styles.container, { opacity: isFetching ? 0.5 : 1 }]}>
            <GoalStats
                calories={calories}
                carbohydrates={carbohydrates}
                proteins={proteins}
                fats={fats}
            />
        </View>
    );
}
