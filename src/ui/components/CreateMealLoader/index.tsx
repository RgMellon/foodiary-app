import { styles } from './style';
import { Logo } from '../Logo';
import { View } from 'react-native';

import { AppText } from '../AppText';
import { theme } from '@ui/styles/theme';

interface ICreateMealLoader {
    type: 'audio' | 'picture';
}

import IaVideo from './AI Animation.mp4';
import { useVideoPlayer, VideoView } from 'expo-video';

export function CreateMealLoader({ type }: ICreateMealLoader) {
    const player = useVideoPlayer(IaVideo, (player) => {
        player.loop = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <VideoView
                nativeControls={false}
                player={player}
                style={styles.videoPlayer}
            />

            <Logo width={75} height={24} />
            <AppText color={theme.colors.gray[100]}>
                {type === 'audio'
                    ? 'Estou ouvindo seu audio...'
                    : 'Estou analisando sua foto ...'}
            </AppText>
        </View>
    );
}
