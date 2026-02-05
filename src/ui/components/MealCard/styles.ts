import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: theme.colors.gray[300],
        padding: 16,
    },
    header: {
        flexDirection: 'row',
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
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        backgroundColor: theme.colors.gray[100],
        borderRadius: 16,
        marginTop: 16,
        paddingHorizontal: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    info: {
        width: '50%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
