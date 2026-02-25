import { MealStatus } from './MealStatus';

export enum InputType {
    AUDIO = 'AUDIO',
    PICTURE = 'PICTURE',
}

export type Meal = {
    id: string;
    createdAt: Date;
    foods: {
        name: string;
        calories: number;
        fat: number;
        proteins: number;
        carbohydrates: number;
        quantity: string;
    }[];
    icon: string;
    name: string;
    status: MealStatus;
    inputType: InputType;
};
