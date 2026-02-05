import { Welcome } from '@ui/components/Welcome';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Header } from './components/Header';
import { RefreshControl } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@ui/styles/theme';
import { EmptyState } from '@ui/components/EmptyState';
import { MealCard } from '@ui/components/MealCard';

export function Home() {
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefresing] = useState(false);

    async function handleRefresh() {
        setRefresing(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setRefresing(false);
    }

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Welcome />
            <FlatList
                contentContainerStyle={styles.content}
                data={[1, 2, 3, 4, 5]}
                ListEmptyComponent={EmptyState}
                ListHeaderComponent={Header}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[theme.colors.lime[900]]}
                    />
                }
                renderItem={MealCard}
            />
        </View>
    );
}
