import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black['700'],
    },
    content: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 211,
    },
    pageTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    caloriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        gap: 8,
    },
});
