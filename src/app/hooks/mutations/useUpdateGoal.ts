import { useMutation } from '@tanstack/react-query';
import { GoalService } from '@app/services/GoalService';

export function useUpdateGoal() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: GoalService.UpdateGoalPayload) => 
            GoalService.updateGoal(payload),
    });

    return {
        updateGoal: mutateAsync,
        isLoading: isPending,
    };
}