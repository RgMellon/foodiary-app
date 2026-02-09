import { Meal } from '@app/types/Meal';
import { Service } from './Service';

export class MealService extends Service {
    static async getMealByDate(
        date: string,
    ): Promise<MealService.MealResponse> {
        const { data } = await this.client.get<MealService.MealResponse>(
            '/meals',
            {
                params: {
                    day: date,
                },
            },
        );
        return {
            meals: data.meals.map((meal) => ({
                ...meal,
                createdAt: new Date(meal.createdAt),
            })),
        };
    }
}

export namespace MealService {
    export type MealResponse = {
        meals: Meal[];
    };
}
