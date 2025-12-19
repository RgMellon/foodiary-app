import  z from 'zod';

export const signInSchema = z.object({
    email: z.email('Insira um e-mail válido'),
    password: z.string().min(8, 'Deve conter no mínimo 8 digitos'),
});

export type SignInSchema = z.infer<typeof signInSchema>;
