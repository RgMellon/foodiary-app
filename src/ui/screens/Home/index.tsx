import { Welcome } from '@ui/components/Welcome';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { styles } from './styles';
import { Header } from './components/Header';
import { RefreshControl } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@ui/styles/theme';
import { EmptyState } from '@ui/components/EmptyState';
import { MealCard } from '@ui/components/MealCard';
import { useMeals } from '@app/hooks/query/useMeal';
import { FullScreenLoad } from '@ui/components/FullScreenLoad';
import { mockMeals } from '@app/mocks/meals';

export function Home() {
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefresing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { initialLoading, meals, isFetching } = useMeals(selectedDate);

    async function handleRefresh() {
        setRefresing(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setRefresing(false);
    }

    if (initialLoading) {
        return <FullScreenLoad />;
    }

    if (isFetching) {
        return <ActivityIndicator />;
    }

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Welcome />
            <FlatList
                contentContainerStyle={styles.content}
                data={meals || []}
                ListEmptyComponent={EmptyState}
                ListHeaderComponent={() => (
                    <Header
                        meals={meals || []}
                        date={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[theme.colors.lime[900]]}
                    />
                }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MealCard meal={item} />}
            />
        </View>
    );
}
