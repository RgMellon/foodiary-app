import { View } from 'react-native';
import { styles } from './styles';
import { GoalStats } from '@ui/components/GoalStats';

export function CurrentGoal() {
    return (
        <View style={styles.container}>
            <GoalStats
                calories={{
                    goal: 200,
                }}
                carbohydrates={{
                    goal: 200,
                }}
                proteins={{
                    goal: 200,
                }}
                fats={{ goal: 200 }}
            />
        </View>
    );
}
