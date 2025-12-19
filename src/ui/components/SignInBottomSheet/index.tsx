import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetTextInput,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { AppText } from '../AppText';
import { useSignInBottomSheetController } from './useSignInBottomSheetController';
import React from 'react';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { Input } from '../Input';
import { FormGroup } from '../FormGroup';
import { View } from 'react-native';
import { styles } from './style';
import { Button } from '../Button';
import { Controller } from 'react-hook-form';

export interface ISignInBottomSheetProps {
    ref: React.Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
    const { bottom, bottomSheetRef, passRef, handleSubmit, form } =
        useSignInBottomSheetController(ref);

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal ref={bottomSheetRef}>
                <BottomSheetView
                    style={[styles.container, { paddingBottom: bottom }]}
                >
                    <AppText weight="bold" size="lg">
                        Acesse sua conta{' '}
                    </AppText>

                    <View style={styles.form}>
                        <Controller
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <FormGroup
                                    label="E-mail"
                                    error={fieldState.error?.message}
                                >
                                    <Input
                                        InputComponent={BottomSheetTextInput}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        autoComplete="email"
                                        returnKeyType="next"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        onSubmitEditing={() => {
                                            passRef.current?.focus();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="password"
                            render={({ fieldState, field }) => (
                                <FormGroup label="Senha" error={fieldState.error?.message}>
                                    <Input
                                        InputComponent={BottomSheetTextInput}
                                        secureTextEntry
                                        autoCapitalize="none"
                                        autoComplete="password"
                                        returnKeyType="done"
                                        value={field.value}
                                        placeholder='Sua senha'
                                        ref={passRef}
                                        onChangeText={field.onChange}
                                        onSubmitEditing={() => {
                                            handleSubmit();
                                        }}
                                    />
                                </FormGroup>
                            )}
                        />

                        <Button onPress={handleSubmit}>Entrar</Button>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}
