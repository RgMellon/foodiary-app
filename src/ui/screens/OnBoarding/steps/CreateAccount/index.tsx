import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import {
    Step,
    StepContent,
    StepFooter,
    StepHeader,
    StepTitle,
} from '../../components/Step';
import { ScrollView } from 'react-native-gesture-handler';

export function CreateAccount() {
    const passRef = useRef<TextInput>(null);
    const passRefConfirm = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);

    function handleSubmit() {
        alert('oi');
    }

    return (
        <Step>
            <ScrollView>
            <StepHeader>
                <StepTitle>Criar conta</StepTitle>
            </StepHeader>
            <StepContent>
                <View style={{ gap: 32 }}>
                    <FormGroup label="Nome" error="">
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                emailRef.current?.focus();
                            }}
                        />
                    </FormGroup>

                    <FormGroup label="E-mail" error="">
                        <Input
                            keyboardType="email-address"
                            autoCapitalize="none"
                            ref={emailRef}
                            autoCorrect={false}
                            autoComplete="email"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                passRef.current?.focus();
                            }}
                        />
                    </FormGroup>

                    <FormGroup label="Senha">
                        <Input
                            placeholder='Sua senha'
                            secureTextEntry
                            autoCapitalize="none"
                            autoComplete="password"
                            returnKeyType="done"
                            ref={passRef}
                            onSubmitEditing={() => {
                                passRefConfirm.current?.focus();
                            }}
                        />
                    </FormGroup>

                    <FormGroup label="Confirmar Senha">
                        <Input
                         placeholder='Confirme sua senha'
                            secureTextEntry
                            autoCapitalize="none"
                            autoComplete="password"
                            returnKeyType="done"
                            ref={passRefConfirm}
                            onSubmitEditing={() => {
                                handleSubmit();
                            }}
                        />
                    </FormGroup>
                </View>
            </StepContent>

            <StepFooter align="center">
                <Button
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
