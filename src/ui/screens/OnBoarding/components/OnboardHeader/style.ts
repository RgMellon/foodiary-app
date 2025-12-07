import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    peogressBarBackground: {
        backgroundColor: theme.colors.gray[400],
        flex: 1,
        height: 4,
        borderRadius: 2,
    },
    progressBarForeground: {
        backgroundColor: theme.colors.lime[700],
        flex: 1,
        height: '100%',
        borderRadius: 2,
        width: '50%',
    },
    rightAction: {
        width: 40,
        height: 40,
    },
});
