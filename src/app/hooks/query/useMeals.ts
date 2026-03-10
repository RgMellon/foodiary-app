import { MealService } from '@app/services/MealService';
import { useQuery } from '@tanstack/react-query';

export function useMeals(date: Date) {
    const formattedDate = date.toISOString().split('T')[0];

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['meals', formattedDate],
        queryFn: async () => {
            const { meals } = await MealService.getMealByDate(formattedDate);
            return meals;
        },
        staleTime: Infinity,
        placeholderData: (prevData) => prevData,
    });

    return {
        meals: data,
        refetch,
        initialLoading: isLoading,
        isFetching,
    };
}
