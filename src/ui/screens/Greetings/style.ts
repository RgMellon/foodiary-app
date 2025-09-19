import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    heading: {
        letterSpacing: -0.32,
        textAlign: 'center',
        maxWidth: 311,
    },

    ctaContent: {
        padding: 20,
        marginTop: 24,
        width: '100%',
    },

     ctaContainer: {
        width: '100%',
        alignItems: 'center',
     },

     signInContainer: {
        marginTop: 16,
        flexDirection: 'row',
        gap: 4,
        paddingVertical: 14,
        justifyContent: 'center',
     },
});
