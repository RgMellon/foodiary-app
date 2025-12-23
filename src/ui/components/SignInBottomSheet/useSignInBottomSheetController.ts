import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from './signInSchema';
import { isAxiosError } from 'axios';
import { Alert } from 'react-native';
import { useAuth } from '@app/context/AuthContext/useAuth';

export function useSignInBottomSheetController(
    ref: React.Ref<ISignInBottomSheet>,
) {
    const { signIn } = useAuth();
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const passRef = useRef<TextInput>(null);

    const form = useForm({
        resolver: zodResolver(signInSchema),
    });

    useImperativeHandle(
        ref,
        () => ({
            open: () => bottomSheetRef.current?.present(),
        }),
        [],
    );

    const { bottom } = useSafeAreaInsets();

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            await signIn(data);
        } catch (err) {
            if (isAxiosError(err)) {
                const isInvalidAcess =
                    err.response?.data.error.code === 'INVALID_REFRESH_TOKEN';
                if (isInvalidAcess) {
                    Alert.alert('Ops, dados incorretos tente outro');
                }
            }
        }
    });

    return {
        bottom,
        bottomSheetRef,
        passRef,
        handleSubmit,
        form,
    };
}
