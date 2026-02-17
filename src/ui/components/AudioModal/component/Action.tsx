import { AppText } from '@ui/components/AppText';
import { AudioModalState } from '../useAudioModalControlle';
import { Button } from '@ui/components/Button';
import { Mic, Square } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';
import { useEffect, useState } from 'react';
import { formatSecondsToTime } from '@app/utils/formatters/formatSecondsToTime';
import { AudioPlayer } from '@ui/components/AudioModal/component/AudioPlayer';

type ActionProps = {
    state: AudioModalState;
    handleStartRecord: () => void;
    handleStopRecord: () => void;
    audioUri: string | null;
    onTryAgain: () => void;
    onConfirm: () => void;
};

export function Action({
    state,
    handleStartRecord,
    handleStopRecord,
    audioUri,
    onConfirm,
    onTryAgain,
}: ActionProps) {
    const [recordTime, setRecordTime] = useState(0);

    useEffect(() => {
        if (state !== 'recording') {
            return;
        }

        const timer = setInterval(() => {
            setRecordTime((time) => time + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [state]);

    useEffect(() => {
        const MAX_AUDIO_DURATION = 20;
        if (recordTime >= MAX_AUDIO_DURATION) {
            handleStopRecord();
        }
    }, [state, handleStopRecord]);

    if (state === 'idl') {
        return (
            <>
                <Button variant="neutral" onPress={handleStartRecord}>
                    <Mic color={theme.colors.lime[400]} />
                </Button>

                <AppText
                    color={theme.colors.gray[600]}
                    style={{ maxWidth: 190, textAlign: 'center' }}
                >
                    Clique no microfone para começar a gravar
                </AppText>
            </>
        );
    }

    if (state === 'recording') {
        return (
            <>
                <Button variant="neutral" onPress={handleStopRecord}>
                    <Square
                        color={theme.colors.lime[400]}
                        fill={theme.colors.lime[400]}
                    />
                </Button>

                <AppText
                    color={theme.colors.gray[600]}
                    style={{ maxWidth: 190, textAlign: 'center' }}
                >
                    {formatSecondsToTime(recordTime)}
                </AppText>
            </>
        );
    }

    if (state === 'recoreded' && audioUri) {
        return (
            <AudioPlayer
                audioUri={audioUri}
                onTryAgain={onTryAgain}
                onConfirm={onConfirm}
            />
        );
    }

    return null;
}
