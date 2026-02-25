import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { theme } from '@ui/styles/theme';

interface ISkeletonProps {
    width?: number | string;
    height?: number;
    borderRadius?: number;
}

export function Skeleton({
    width = '100%',
    height = 20,
    borderRadius = 4,
}: ISkeletonProps) {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [opacity]);

    return (
        <Animated.View
            style={[
                styles.skeleton,
                {
                    width: width as any,
                    height,
                    borderRadius,
                },
                { opacity },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: theme.colors.gray['400'],
    },
});
