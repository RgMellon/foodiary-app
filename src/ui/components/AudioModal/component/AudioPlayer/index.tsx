import { theme } from '@ui/styles/theme';
import { Button } from '../../../Button';
import { View } from 'react-native';
import { styles } from '../../styles';
import { CheckIcon, PlayIcon, Trash2Icon } from 'lucide-react-native';
import { AppText } from '@ui/components/AppText';
import { formatSecondsToTime } from '@app/utils/formatters/formatSecondsToTime';

export interface IAudioPlayer {
    duration: number;
}
export function AudioPlayer({ duration }: IAudioPlayer) {
    return (
        <>
            <View style={styles.actionGroup}>
                <Button variant="neutral" size="icon" onPress={() => {}}>
                    <Trash2Icon color={theme.colors.gray[500]} />
                </Button>

                <Button variant="neutral" size="icon" onPress={() => {}}>
                    <PlayIcon
                        color={theme.colors.lime[600]}
                        fill={theme.colors.lime[600]}
                    />
                </Button>

                <Button size="icon" onPress={() => {}}>
                    <CheckIcon color={theme.colors.black[700]} />
                </Button>
            </View>

            <AppText color={theme.colors.gray[600]}>
                {formatSecondsToTime(0)} / {formatSecondsToTime(duration)}
            </AppText>
        </>
    );
}
