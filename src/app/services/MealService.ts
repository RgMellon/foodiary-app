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

    static async createMeal(
        payload: MealService.CreateMealPayload,
    ): Promise<MealService.CreateMealResponse> {
        const { data } = await this.client.post('/meals', payload);

        await this.uploadPresignedPOST({
            uploadSignature: data.uploadSignature,
            file: {
                type: payload.file.type,
                uri: payload.file.uri,
                name: payload.file.name,
            },
        });

        return {
            mealId: data.mealId,
        };
    }

    static async getMealById(
        id: string,
    ): Promise<MealService.GetMealByIdResponse> {
        const { data } = await this.client.get<MealService.GetMealByIdResponse>(
            `/meals/${id}`,
        );

        return {
            meal: {
                ...data.meal,
                createdAt: new Date(data.meal.createdAt),
            },
        };
    }
}

export namespace MealService {
    export type MealResponse = {
        meals: Meal[];
    };

    export type CreateMealPayload = {
        file: {
            type: 'audio/m4a' | 'image/jpeg';
            size: number;
            uri: string;
            name: string;
        };
    };

    export type CreateMealResponse = {
        mealId: string;
    };

    export type GetMealByIdResponse = {
        meal: Meal;
    };
}
