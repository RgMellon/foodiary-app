import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import React from 'react';
import { View } from 'react-native';
import { useOnboard } from '../context/useOnboard';

export function Gender() {
    const { nextStep } = useOnboard();
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <AppText> Gender</AppText>
            <Button onPress={nextStep}>Proximo</Button>
        </View>;
}
