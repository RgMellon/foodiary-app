import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { TextInput } from 'react-native-gesture-handler';

export function useSignInBottomSheetController(ref: React.Ref<ISignInBottomSheet>) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const passRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
        open: () => bottomSheetRef.current?.present(),
    }), []);

    const { bottom } = useSafeAreaInsets();

    const handleSubmit = useCallback(() => {

    }, []);

    return {
        bottom,
        bottomSheetRef,
        passRef,
        handleSubmit,
    };
}
