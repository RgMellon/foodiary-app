import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black['700'],
    },

    gradient: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
    },

    image: {
        width: '100%',
        height: 211,
    },

    content: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    macroContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 2,
        padding: 20,
    },

    macroItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },

    statusBarContainer: {
        alignSelf: 'center',
        overflow: 'hidden',
        width: '90%',
        height: 3,
        backgroundColor: theme.colors.gray['700'],
        flexDirection: 'row',
    },
    statusBarItem: {
        height: 10,
    },

    separator: {
        height: 1,
        backgroundColor: theme.colors.gray['400'],
        marginTop: 30,
    },

    mealTitleContainer: {
        marginTop: 12,
        paddingHorizontal: 20,
        gap: 19,
    },
});
