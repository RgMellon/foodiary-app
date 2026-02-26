import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GoalService } from '@app/services/GoalService';

export function useUpdateGoal() {
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: GoalService.UpdateGoalPayload) =>
            GoalService.updateGoal(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['account'] });
        },
    });

    return {
        updateGoal: mutateAsync,
        isLoading: isPending,
    };
}
