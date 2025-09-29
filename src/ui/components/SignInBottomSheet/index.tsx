import  {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { AppText } from '../AppText';
import { useSignInBottomSheetController } from './useSignInBottomSheetController';
import React from 'react';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { Input } from '../Input';

export interface ISignInBottomSheetProps {
    ref: React.Ref<ISignInBottomSheet>
}

export function SignInBottomSheet({ ref }: ISignInBottomSheetProps) {
    const { bottom, bottomSheetRef } = useSignInBottomSheetController(ref);

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal ref={bottomSheetRef}>
                <BottomSheetView style={{ paddingBottom: bottom }}>
                    <AppText>Acesse sua conta </AppText>

                    <Input disabled  />
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}
