import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
    },
    button: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: theme.colors.gray[300],
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        gap: 16,
    },
    buttonWrapper: {
        flex: 1,
        borderRadius: 16,
    },
    icon: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.gray[200],
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
