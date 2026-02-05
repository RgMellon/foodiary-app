import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 30,
        backgroundColor: theme.colors.lime[400],
    },

    userInfo: {
        flexDirection: 'row',
        gap: 12,
    },
    greetings: {
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.lime[800],
    },
});
