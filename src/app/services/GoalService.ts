import { Service } from './Service';
import { GoalFormData } from '@app/schemas/goalSchema';

export class GoalService extends Service {
    static async updateGoal(data: GoalService.UpdateGoalPayload): Promise<void> {
        await this.client.put('/goal', data);
    }

    static async getGoal(): Promise<GoalService.GoalResponse> {
        const { data } = await this.client.get<GoalService.GoalResponse>('/goal');
        return data;
    }
}

export namespace GoalService {
    export type UpdateGoalPayload = {
        calories: number;
        proteins: number;
        carbohydrates: number;
        fat: number;
    };
    
    export type GoalResponse = {
        calories: number;
        proteins: number;
        carbohydrates: number;
        fat: number;
    };
}