import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        backgroundColor: theme.colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginTop: -16,
    },

    divider: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.gray[200],
        marginTop: 12,
        marginBottom: 20,
    },
    title: {
        letterSpacing: 1.3,
    },
});
