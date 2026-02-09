import { MealService } from '@app/services/MealService';
import { useQuery } from '@tanstack/react-query';

export function useMeals(date: Date) {
    const formattedDate = date.toISOString().split('T')[0];

    const { data, isLoading, isPending } = useQuery({
        queryKey: ['meals', formattedDate],
        queryFn: async () => {
            const { meals } = await MealService.getMealByDate(formattedDate);
            return meals;
        },
        staleTime: Infinity,
    });

    return {
        meals: data,
        initialLoading: isLoading,
        isFetching: isPending,
    };
}
