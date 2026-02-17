import {
    AudioModule,
    RecordingPresets,
    setAudioModeAsync,
    useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export type AudioModalState = 'recording' | 'recoreded' | 'idl';

export function useModalAudioController() {
    const [state, setState] = useState<AudioModalState>('idl');
    const [audioUri, setAudioUri] = useState<string | null>(null);

    const audioRecorder = useAudioRecorder(RecordingPresets.LOW_QUALITY);

    useEffect(() => {
        (async () => {
            const status = await AudioModule.requestRecordingPermissionsAsync();
            if (!status.granted) {
                Alert.alert('Permissão para acessar o microfone foi negada');
            }

            setAudioModeAsync({
                playsInSilentMode: true,
                allowsRecording: true,
            });
        })();
    }, []);

    async function handleStartRecord() {
        await audioRecorder.prepareToRecordAsync();
        audioRecorder.record();
        setState('recording');
    }

    const handleStopRecord = useCallback(async () => {
        await audioRecorder.stop();

        setAudioUri(audioRecorder.uri);
        setState('recoreded');
    }, []);

    async function onTryAgain() {
        setAudioUri(null);
        setState('idl');
    }

    async function onConfirm() {}

    return {
        state,
        handleStartRecord,
        handleStopRecord,
        isLoading: false,
        audioUri,
        onTryAgain,
        onConfirm,
    };
}
