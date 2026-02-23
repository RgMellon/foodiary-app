import { theme } from '@ui/styles/theme';
import { Button } from '../../../Button';
import { View } from 'react-native';
import { styles } from '../../styles';
import {
    CheckIcon,
    PauseIcon,
    PlayIcon,
    Trash2Icon,
} from 'lucide-react-native';
import { AppText } from '@ui/components/AppText';
import { formatSecondsToTime } from '@app/utils/formatters/formatSecondsToTime';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

export interface IAudioPlayer {
    audioUri: string;
    onTryAgain: () => void;
    onConfirm: () => void;
}

export function AudioPlayer({ audioUri, onTryAgain, onConfirm }: IAudioPlayer) {
    const player = useAudioPlayer(audioUri);
    const status = useAudioPlayerStatus(player);

    function handlePlayPause() {
        if (status.playing) {
            player.pause();
            return;
        }

        player.seekTo(0);
        player.play();
    }

    return (
        <>
            <View style={styles.actionGroup}>
                <Button variant="neutral" size="icon" onPress={onTryAgain}>
                    <Trash2Icon color={theme.colors.gray[500]} />
                </Button>

                <Button variant="neutral" size="icon" onPress={handlePlayPause}>
                    {!status.playing ? (
                        <PlayIcon
                            size={20}
                            color={theme.colors.lime[600]}
                            fill={theme.colors.lime[600]}
                        />
                    ) : (
                        <PauseIcon
                            size={20}
                            color={theme.colors.lime[600]}
                            fill={theme.colors.lime[600]}
                        />
                    )}
                </Button>

                <Button size="icon" onPress={onConfirm}>
                    <CheckIcon color={theme.colors.black[700]} />
                </Button>
            </View>

            <AppText color={theme.colors.gray[600]}>
                {formatSecondsToTime(0)} /{' '}
                {formatSecondsToTime(status.duration)}
            </AppText>
        </>
    );
}
