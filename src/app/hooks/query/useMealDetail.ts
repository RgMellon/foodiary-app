import { MealService } from '@app/services/MealService';
import { MealStatus } from '@app/types/MealStatus';
import { useQuery } from '@tanstack/react-query';

const processingStatuses = [
    MealStatus.UPLOADING,
    MealStatus.QUEUED,
    MealStatus.PROCESSING,
];

export function useMeal(mealId?: string) {
    const { data: meal, isFetching } = useQuery({
        queryKey: ['meal', mealId],
        staleTime: Infinity,
        enabled: !!mealId,
        queryFn: async () => {
            if (!mealId) {
                return;
            }

            const { meal } = await MealService.getMealById(mealId);
            return meal;
        },
        refetchInterval: (query) => {
            const mealStatus = query.state.data?.status;
            if (mealStatus && processingStatuses.includes(mealStatus)) {
                return 3_000;
            }

            return false;
        },
    });

    const isProcessing = !!(meal && processingStatuses.includes(meal.status));

    return {
        meal,
        isLoading: isFetching,
        isProcessing,
    };
}
