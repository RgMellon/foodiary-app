import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        gap: 16,
    },
    title: {
        letterSpacing: -0.32,
        textAlign: 'center',
    },
    subtitle: {
        color: theme.colors.gray[700],
        textAlign: 'center',
    },
    content: {
        flex: 1,
        marginBottom: 34,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
      paddingHorizontal: 24,
    },

    footerEnd: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
});
