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
        marginTop: 16,
    },
    footer: {
        height: 112,
        marginBottom: 40,
        marginTop: 24,
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

    camera: {
        width: '100%',
        marginTop: 20,
        flex: 1,
    },
});
