import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.lime[900],
        justifyContent: 'center',
        alignItems: 'center',
        gap: 46,
    },
    videoPlayer: {
        width: 136,
        borderRadius: 68,
        height: 136,
    },
});
