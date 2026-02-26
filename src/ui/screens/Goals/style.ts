import { StyleSheet } from 'react-native';
import { theme } from '@ui/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray['100'],
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {},
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    form: {
        marginTop: 24,
        gap: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.gray[200],
        borderRadius: 8,
        marginBottom: 24,
        marginTop: 24,
    },
    buttonContainer: {
        marginTop: 32,
    },
});
