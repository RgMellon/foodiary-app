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
    buttonContainer: {
        marginTop: 32,
    },
});
