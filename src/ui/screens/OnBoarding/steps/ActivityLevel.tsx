import { AppText } from '@ui/components/AppText';
import React from 'react';
import { View } from 'react-native';
import { useOnboard } from '../context/useOnboard';
import { Button } from '@ui/components/Button';

export function ActivityLevel() {
    const { nextStep } = useOnboard();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
            }}
        >
            <AppText> ActivityLevel</AppText>
            <Button onPress={nextStep}>Proximo</Button>
        </View>
    );
}
