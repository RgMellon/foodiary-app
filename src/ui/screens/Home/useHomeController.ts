import { useMeals } from '@app/hooks/query/useMeal';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useHomeController() {
    const { top } = useSafeAreaInsets();
    const [refreshing, setRefresing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { initialLoading, meals, isFetching, refetch } =
        useMeals(selectedDate);

    async function handleRefresh() {
        setRefresing(true);
        await refetch();

        setRefresing(false);
    }

    function handleNextDay() {
        setSelectedDate((prevState) => {
            const newDate = new Date(prevState);
            newDate.setDate(prevState.getDate() + 1);
            return newDate;
        });
    }

    function handlePrevDay() {
        setSelectedDate((prevState) => {
            const newDate = new Date(prevState);
            newDate.setDate(prevState.getDate() - 1);
            return newDate;
        });
    }

    return {
        initialLoading,
        meals,
        isFetching,
        handleRefresh,
        top,
        refreshing,
        selectedDate,
        handleNextDay,
        handlePrevDay,
    };
}
