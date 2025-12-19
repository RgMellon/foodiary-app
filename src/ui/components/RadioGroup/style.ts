import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        gap: 16,
    },
    containerHorizontal: {
        flexDirection: 'row',
    },
    item: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.gray[300],
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },

    itemSelected: {
        borderColor: theme.colors.lime[700],
        backgroundColor: theme.colors.lime['700/10'],
    },
    itemSelectedError: {
        borderColor: theme.colors.support.red,
        backgroundColor: theme.colors.support['red/10'],
    },

    itemHorizontal: {
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 32,
    },

    icon: {
        backgroundColor: theme.colors.gray[200],
        borderRadius: 12,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapper: {
        gap: 4,
    },

    textCenter: {
        textAlign: 'center',
    },
});
