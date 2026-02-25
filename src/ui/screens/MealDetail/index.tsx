import { useMeal } from '@app/hooks/query/useMealDetail';
import { Header } from './components/Header';
import { styles } from './styles';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AppStackScreenProps } from '@app/navigation/AppStack';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { Skeleton } from '@ui/components/Skeleton';

export function MealDetail() {
    const { params } = useRoute<AppStackScreenProps<'MealDetail'>['route']>();

    const { meal, isLoading } = useMeal(params.meailId);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <View style={styles.skeletonHeader}>
                    <Skeleton height={211} />
                    <View style={styles.skeletonContent}>
                        <Skeleton height={24} width="40%" />
                        <Skeleton height={20} width="30%" />
                    </View>
                </View>
                {[1, 2, 3, 4].map((i) => (
                    <View key={i} style={styles.content}>
                        <View style={styles.foodHeader}>
                            <Skeleton height={18} width="60%" />
                            <Skeleton height={16} width="20%" />
                        </View>
                        <View style={styles.macros}>
                            <Skeleton height={14} width={40} />
                            <Skeleton height={14} width={40} />
                            <Skeleton height={14} width={40} />
                        </View>
                    </View>
                ))}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={meal?.foods ?? []}
                ListHeaderComponent={() => <Header meal={meal} />}
                renderItem={(food) => {
                    const calories =
                        food.item.proteins * 4 +
                        food.item.carbohydrates * 4 +
                        food.item.fat * 9;

                    return (
                        <View style={styles.content}>
                            <View style={styles.foodHeader}>
                                <AppText
                                    weight="medium"
                                    color={theme.colors.gray[700]}
                                >
                                    {food.item.name}
                                </AppText>
                                <AppText
                                    size="sm"
                                    weight="semiBold"
                                    color={theme.colors.support.red}
                                >
                                    {calories.toFixed(0)} kcal
                                </AppText>
                            </View>
                            <View style={styles.macros}>
                                <AppText
                                    size="sm"
                                    color={theme.colors.support.teal}
                                >
                                    {food.item.proteins.toFixed(0)}g
                                </AppText>
                                <AppText
                                    size="sm"
                                    color={theme.colors.support.yellow}
                                >
                                    {food.item.carbohydrates.toFixed(0)}g
                                </AppText>
                                <AppText
                                    size="sm"
                                    color={theme.colors.support.orange}
                                >
                                    {food.item.fat.toFixed(0)}g
                                </AppText>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}
