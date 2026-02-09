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
};
