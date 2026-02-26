import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useEffect, useState, useCallback } from 'react';

import { goalSchema, GoalFormData } from '@app/schemas/goalSchema';
import { useUpdateGoal } from '@app/hooks/mutations/useUpdateGoal';
import { useAccount } from '@app/hooks/query/useAccount';

export function useGoalsController() {
    const { goBack } = useNavigation();
    const { updateGoal, isLoading } = useUpdateGoal();
    const { account } = useAccount();
    const [autoCalculate, setAutoCalculate] = useState(false);

    const form = useForm<GoalFormData>({
        resolver: zodResolver(goalSchema),
        defaultValues: {
            calories: 0,
            proteins: 0,
            carbohydrates: 0,
            fat: 0,
        },
    });

    useEffect(() => {
        if (account?.goal) {
            form.reset({
                calories: Number(account.goal.calories) || 0,
                proteins: Number(account.goal.proteins) || 0,
                carbohydrates: Number(account.goal.carbohydrates) || 0,
                fat: Number(account.goal.fat) || 0,
            });
        }
    }, [account?.goal, form.reset]);

    const calculateMacros = useCallback(
        (calories: number) => {
            if (!autoCalculate || calories <= 0) {
                return;
            }

            // Distribuição padrão: 30% proteína, 40% carbs, 30% gordura
            const proteins = Math.round((calories * 0.3) / 4); // 4 kcal por grama
            const carbohydrates = Math.round((calories * 0.4) / 4); // 4 kcal por grama
            const fat = Math.round((calories * 0.3) / 9); // 9 kcal por grama

            form.setValue('proteins', proteins);
            form.setValue('carbohydrates', carbohydrates);
            form.setValue('fat', fat);
        },
        [autoCalculate, form],
    );

    const handleCaloriesChange = useCallback(
        (calories: number) => {
            form.setValue('calories', calories);
            calculateMacros(calories);
        },
        [form, calculateMacros],
    );

    const onSubmit = async (data: GoalFormData) => {
        try {
            await updateGoal(data);

            Alert.alert('Sucesso', 'Metas salvas com sucesso!', [
                { text: 'OK', onPress: () => goBack() },
            ]);
        } catch (error) {
            Alert.alert(
                'Erro',
                'Não foi possível salvar as metas. Tente novamente.',
            );
            console.error('Erro ao salvar metas:', error);
        }
    };

    return {
        form,
        onSubmit,
        isLoading,
        goBack,
        autoCalculate,
        setAutoCalculate,
        handleCaloriesChange,
    };
}
