import { Welcome } from '@ui/components/Welcome';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Header } from './components/Header';
import { RefreshControl } from 'react-native-gesture-handler';

import { theme } from '@ui/styles/theme';
import { EmptyState } from '@ui/components/EmptyState';
import { MealCard } from '@ui/components/MealCard';
import { FullScreenLoad } from '@ui/components/FullScreenLoad';
import { HomeProvider } from '@app/context/HomeContext/HomeProvider';
import { useHomeController } from './useHomeController';
import { Fab } from '@ui/components/Fab';

export function Home() {
    const {
        handleRefresh,
        initialLoading,
        meals,
        refreshing,
        top,
        selectedDate,
        handleNextDay,
        handlePrevDay,
        isFetching,
    } = useHomeController();

    if (initialLoading) {
        return <FullScreenLoad />;
    }

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Welcome />
            <HomeProvider
                isFetching={isFetching}
                date={selectedDate}
                meals={meals || []}
                nextDay={handleNextDay}
                prevDay={handlePrevDay}
            >
                <FlatList
                    contentContainerStyle={styles.content}
                    data={meals || []}
                    ListEmptyComponent={EmptyState}
                    ListHeaderComponent={() => <Header />}
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
            </HomeProvider>
            {meals && meals?.length > 1 && <Fab />}
        </View>
    );
}
