import { View } from 'react-native';
import { styles } from './style';
import { AppText } from '@ui/components/AppText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@ui/styles/theme';
import React from 'react';

export function Step({ children }: { children: React.ReactNode }) {
    const { bottom } = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingBottom: bottom }]}>
            {children}
        </View>
    );
}

export function StepHeader({ children }: { children: React.ReactNode }) {
    return <View style={styles.header}>{children}</View>;
}

export function StepTitle({ children }: { children: string }) {
    return (
        <AppText style={[styles.title, { fontSize: theme.fontSize['3xl'] }]}>
            {children}
        </AppText>
    );
}

export function StepSubTitle({ children }: { children: string }) {
    return <AppText style={styles.subtitle}>{children}</AppText>;
}

interface IStepContentProps {
    children: React.ReactNode;
    position?: 'end' | 'center'
}

export function StepContent({ children, position = 'end' }: IStepContentProps) {
    return <View style={[styles.content, position === 'center' && styles.contentCenter]}>{children}</View>;
}

interface IStepFooterProps {
    children: React.ReactNode;
    align?: 'end' | 'center';
}
export function StepFooter({ children, align = 'end' }: IStepFooterProps) {
    return <View style={[styles.footer, align === 'end' && styles.footerEnd]}>{children}</View>;
}
