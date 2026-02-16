import { useState } from 'react';

export type AudioModalState = 'recording' | 'recoreded' | 'idl';

export function useModalAudioController() {
    const [state, setState] = useState<AudioModalState>('idl');

    function handleStartRecord() {
        setState('recording');
    }

    function handleStopRecord() {
        setState('recoreded');
    }

    return {
        state,
        handleStartRecord,
        handleStopRecord,
        isLoading: true,
    };
}
