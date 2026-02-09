import { Meal } from '@app/types/Meal';

export const mockMeals: Meal[] = [
    {
        id: '1',
        name: 'Café da manhã',
        icon: '🍞',
        createdAt: new Date('2024-01-15T08:30:00'),
        foods: [
            {
                name: 'Pão integral',
                calories: 150,
                fat: 2,
                proteins: 6,
                carbohydrates: 28,
                quantity: '2 fatias',
            },
            {
                name: 'Manteiga',
                calories: 100,
                fat: 11,
                proteins: 0,
                carbohydrates: 0,
                quantity: '10g',
            },
            {
                name: 'Café com leite',
                calories: 80,
                fat: 3,
                proteins: 4,
                carbohydrates: 10,
                quantity: '200ml',
            },
        ],
    },
    {
        id: '2',
        name: 'Almoço',
        icon: '🍽️',
        createdAt: new Date('2024-01-15T12:30:00'),
        foods: [
            {
                name: 'Arroz integral',
                calories: 200,
                fat: 1,
                proteins: 5,
                carbohydrates: 45,
                quantity: '150g',
            },
            {
                name: 'Frango grelhado',
                calories: 250,
                fat: 5,
                proteins: 45,
                carbohydrates: 0,
                quantity: '200g',
            },
            {
                name: 'Salada',
                calories: 50,
                fat: 2,
                proteins: 2,
                carbohydrates: 8,
                quantity: '100g',
            },
        ],
    },
];
