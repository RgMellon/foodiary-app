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

export interface ISignInBottomSheetProps {
    ref: React.Ref<ISignInBottomSheet>;
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
    const { bottom, bottomSheetRef, passRef, handleSubmit } = useSignInBottomSheetController(ref);

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
                        <FormGroup label="E-mail" error="email erradio">
                            <Input
                                InputComponent={BottomSheetTextInput}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoComplete="email"
                                returnKeyType='next'
                                onSubmitEditing={() => {
                                    passRef.current?.focus();
                                }}
                            />
                        </FormGroup>

                        <FormGroup label="Senha">
                            <Input
                                InputComponent={BottomSheetTextInput}
                                secureTextEntry
                                autoCapitalize="none"
                                autoComplete="password"
                                returnKeyType='done'
                                ref={passRef}
                                onSubmitEditing={() => {
                                    handleSubmit();
                                }}
                            />
                        </FormGroup>

                        <Button onPress={handleSubmit}>Entrar</Button>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}
