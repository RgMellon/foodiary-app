import { Animated, View } from 'react-native';

import { styles } from './style';
import { Button } from '@ui/components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'lucide-react-native';
import { useOnboard } from '../../context/useOnboard';
import { useEffect, useRef } from 'react';
import { totalSteps } from '../../step';

export function OnboardHeader() {
    const { prevStep, currentStepIndex } = useOnboard();

    const widthAnimation = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(widthAnimation.current, {
            toValue: (currentStepIndex + 1) * 100 / totalSteps,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [currentStepIndex]);

    const { top } = useSafeAreaInsets();
    return (
        <View style={{ ...styles.container, marginTop: top }}>
            <Button size="icon" variant="ghost" onPress={prevStep}>
                <ArrowLeftIcon size={20} />
            </Button>

            <View style={styles.peogressBarBackground}>
                <Animated.View
                    style={[
                        styles.progressBarForeground,
                        {
                            width: widthAnimation.current.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />
            </View>

            <View style={styles.rightAction}></View>
        </View>
    );
}
