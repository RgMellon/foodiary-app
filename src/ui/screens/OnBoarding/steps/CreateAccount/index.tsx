import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import React, { useRef } from 'react';
import { Alert, TextInput, View } from 'react-native';
import {
    Step,
    StepContent,
    StepFooter,
    StepHeader,
    StepTitle,
} from '../../components/Step';
import { ScrollView } from 'react-native-gesture-handler';
import { Controller, useFormContext } from 'react-hook-form';
import { OnboardingSchema } from '../../schema';
import { isAxiosError } from 'axios';
import { useAuth } from '@app/context/AuthContext/useAuth';

export function CreateAccount() {
    const { signUp } = useAuth();
    const passRef = useRef<TextInput>(null);
    const passRefConfirm = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);

    const form = useFormContext<OnboardingSchema>();

    const handleSubmit = form.handleSubmit(async (data) => {
        const birthDate = data.birthDate.toISOString().split('T')[0];

        try {
            await signUp({
                account: {
                    email: data.account.email,
                    password: data.account.password,
                },
                profile: {
                    activityLevel: data.activityLevel,
                    birthDate,
                    gender: data.gender,
                    goal: data.goal,
                    name: data.account.name,
                    height: Number(data.height),
                    weight: Number(data.weight),
                },
            });
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(JSON.stringify(error.response?.data));
                Alert.alert(
                    'Falha ao criar usuário, revise os dados e tente novamente',
                );
            }
        }
    });

    return (
        <Step>
            <ScrollView>
                <StepHeader>
                    <StepTitle>Criar conta</StepTitle>
                </StepHeader>
                <StepContent>
                    <View style={{ gap: 32 }}>
                        <Controller
                            name={'account.name'}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <FormGroup
                                    label="Nome"
                                    error={fieldState.error?.message}
                                >
                                    <Input
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        returnKeyType="next"
                                        placeholder="Seu nome"
                                        onChangeText={(value) => {
                                            field.onChange(value);
                                            form.trigger('account.name');
                                        }}
                                        value={field.value}
                                        onSubmitEditing={() => {
                                            emailRef.current?.focus();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />

                        <Controller
                            name={'account.email'}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <FormGroup
                                    label="E-mail"
                                    error={fieldState.error?.message}
                                >
                                    <Input
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        ref={emailRef}
                                        autoCorrect={false}
                                        autoComplete="email"
                                        returnKeyType="next"
                                        onChangeText={(value) => {
                                            field.onChange(value);
                                            form.trigger('account.email');
                                        }}
                                        value={field.value}
                                        onSubmitEditing={() => {
                                            passRef.current?.focus();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />

                        <Controller
                            name={'account.password'}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <FormGroup
                                    label="Senha"
                                    error={fieldState.error?.message}
                                >
                                    <Input
                                        placeholder="Sua senha"
                                        secureTextEntry
                                        autoCapitalize="none"
                                        autoComplete="password"
                                        returnKeyType="done"
                                        ref={passRef}
                                        onChangeText={(value) => {
                                            field.onChange(value);
                                            form.trigger('account.password');
                                        }}
                                        value={field.value}
                                        onSubmitEditing={() => {
                                            passRefConfirm.current?.focus();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />

                        <Controller
                            name={'account.confirmPassword'}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <FormGroup
                                    label="Confirmar Senha"
                                    error={fieldState.error?.message}
                                >
                                    <Input
                                        placeholder="Confirme sua senha"
                                        secureTextEntry
                                        autoCapitalize="none"
                                        autoComplete="password"
                                        returnKeyType="done"
                                        ref={passRefConfirm}
                                        onChangeText={(value) => {
                                            field.onChange(value);
                                            form.trigger(
                                                'account.confirmPassword',
                                            );
                                        }}
                                        value={field.value}
                                        onSubmitEditing={() => {
                                            handleSubmit();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />
                    </View>
                </StepContent>

                <StepFooter align="center">
                    <Button
                        isLoading={form.formState.isSubmitting}
                        style={{ width: '100%' }}
                        size="default"
                        onPress={handleSubmit}
                    >
                        Cadastrar
                    </Button>
                </StepFooter>
            </ScrollView>
        </Step>
    );
}
