import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black[900],
    },
    header: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 20,
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
    },
    footer: {
        height: 112,
        marginBottom: 80,
    },

    circler1: {
        width: 266,
        height: 266,
        borderRadius: 266 / 2,
        borderWidth: 1,
        borderColor: theme.colors.gray[700],
        alignItems: 'center',
        justifyContent: 'center',
    },

    circler1Recording: {
        borderColor: theme.colors.lime['700/5'],
    },

    circler2: {
        width: 228,
        height: 228,
        borderRadius: 228 / 2,
        borderWidth: 1,
        borderColor: theme.colors.gray['700/5'],
        alignItems: 'center',
        justifyContent: 'center',
    },

    circler2Recording: {
        borderColor: theme.colors.lime['700/10'],
    },

    circler3: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        borderWidth: 1,
        backgroundColor: theme.colors.gray['700/10'],
        alignItems: 'center',
        justifyContent: 'center',
    },

    circler3Recording: {
        backgroundColor: theme.colors.lime['700/10'],
    },

    info: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 192,
        textAlign: 'center',
    },

    actionsContainer: {
        alignItems: 'center',
        gap: 16,
    },

    actionGroup: {
        flexDirection: 'row',
        gap: 32,
    },
});
