import { z } from 'zod';

export const goalSchema = z.object({
    calories: z.number().min(1, 'Calorias deve ser maior que 0'),
    proteins: z.number().min(1, 'Proteínas deve ser maior que 0'),
    carbohydrates: z.number().min(1, 'Carboidratos deve ser maior que 0'),
    fat: z.number().min(1, 'Gorduras deve ser maior que 0'),
});

export type GoalFormData = z.infer<typeof goalSchema>;
