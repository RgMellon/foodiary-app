import { View } from 'react-native';
import { Button } from '../Button';
import { Plus } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useCallback, useRef, useState } from 'react';
import { CreateMealOptions } from '../CreateMealOptions';
import { AppText } from '../AppText';

export function Fab() {
    const { bottom } = useSafeAreaInsets();
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [isVisible, setIsVisible] = useState(true);

    const handlePress = () => {
        bottomSheetRef.current?.present();
        setIsVisible(false);
    };

    const handleDismiss = useCallback(() => {
        setIsVisible(true);
    }, []);

    return (
        <BottomSheetModalProvider>
            {isVisible && (
                <View style={[styles.container, { bottom }]}>
                    <Button size="icon" onPress={handlePress}>
                        <Plus size={16} color={theme.colors.gray[700]} />
                    </Button>
                </View>
            )}

            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={['50%', '80%']}
                backgroundStyle={styles.bottomSheet}
                onDismiss={handleDismiss}
            >
                <BottomSheetView style={{ paddingBottom: bottom, padding: 16 }}>
                    <View style={{ marginBottom: 80 }}>
                        <AppText> Cadastre sua refeição </AppText>
                        <CreateMealOptions />
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
}
