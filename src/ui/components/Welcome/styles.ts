import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.lime['900'],
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        paddingHorizontal: 24,
    },
    wrapper: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: theme.colors.gray[200],
    },

    headerContent: {
        marginTop: 12,
        gap: 8,
        alignItems: 'center',
        maxWidth: 327,
    },

    body: {
        marginTop: 36,
    },

});
