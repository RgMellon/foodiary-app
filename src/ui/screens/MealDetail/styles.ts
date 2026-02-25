import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginHorizontal: 30,
        padding: 14,
        borderBottomColor: theme.colors.gray['400'],
        borderBottomWidth: 1,
    },
    foodHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    macros: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },
    skeletonHeader: {
        gap: 16,
    },
    skeletonContent: {
        padding: 20,
        gap: 12,
    },
});
