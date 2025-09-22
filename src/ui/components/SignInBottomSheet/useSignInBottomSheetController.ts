import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ISignInBottomSheet } from './ISignInBottomSheet';

export function useSignInBottomSheetController(ref: React.Ref<ISignInBottomSheet>) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
        open: () => bottomSheetRef.current?.present(),
    }), []);

    const { bottom } = useSafeAreaInsets();

    return {
        bottom,
        bottomSheetRef,
    };
}
