import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {  useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from './signInSchema';

export function useSignInBottomSheetController(ref: React.Ref<ISignInBottomSheet>) {

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const passRef = useRef<TextInput>(null);

    const form = useForm({
        resolver: zodResolver(signInSchema),
    });

    useImperativeHandle(ref, () => ({
        open: () => bottomSheetRef.current?.present(),
    }), []);

    const { bottom } = useSafeAreaInsets();

    const handleSubmit = form.handleSubmit((data) => {
        console.log(data.email);
        console.log(data.password);
    });

    return {
        bottom,
        bottomSheetRef,
        passRef,
        handleSubmit,
        form,
    };
}
