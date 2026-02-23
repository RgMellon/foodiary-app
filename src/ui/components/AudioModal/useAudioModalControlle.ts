import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { useMeal } from '@app/hooks/query/useMealDetail';
import { MealStatus } from '@app/types/MealStatus';
import {
    AudioModule,
    RecordingPresets,
    setAudioModeAsync,
    useAudioRecorder,
} from 'expo-audio';
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { AppStackNavigationprops } from '@app/navigation/AppStack';

export type AudioModalState = 'recording' | 'recoreded' | 'idl';

interface IUseAudioModalControllerParams {
    onClose: () => void;
    onCreate?: () => void;
}

export function useModalAudioController({
    onClose,
    onCreate,
}: IUseAudioModalControllerParams) {
    const [state, setState] = useState<AudioModalState>('idl');
    const [audioUri, setAudioUri] = useState<string | null>(null);

    const { goBack } = useNavigation<AppStackNavigationprops>();
    const queryClient = useQueryClient();

    const audioRecorder = useAudioRecorder(RecordingPresets.LOW_QUALITY);

    const memoizedOnClose = useRef(onClose);
    useLayoutEffect(() => {
        memoizedOnClose.current = onClose;
    }, [onClose]);

    const memoizedOnCreate = useRef(onCreate);
    useLayoutEffect(() => {
        memoizedOnCreate.current = onCreate;
    }, [onCreate]);

    const {
        createMeal,
        isLoading: isCreatingMeal,
        createdMealId,
    } = useCreateMeal();

    const {
        meal,
        isLoading: isLoadingMeal,
        isProcessing: isProcessingMeal,
    } = useMeal(createdMealId);

    useEffect(() => {
        if (meal?.status === MealStatus.FAILED) {
            Alert.alert(
                'Oops!',
                'Ocorreu um erro ao criar a sua refeição! Tente novamente!',
            );
        }

        if (meal?.status === MealStatus.SUCCESS) {
            memoizedOnClose.current();
            memoizedOnCreate.current?.();
            queryClient.invalidateQueries({ queryKey: ['meals'] });
            goBack();
            // navigate('MealDetails', { mealId: meal.id });
        }
    }, [meal?.status, meal?.id, goBack, queryClient]);

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

    async function handleConfirm() {
        if (!audioUri) {
            return;
        }

        try {
            await createMeal(audioUri);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);

            Alert.alert(
                'Oops!',
                'Ocorreu um erro ao criar a sua refeição! Tente novamente.',
            );
        }
    }

    return {
        state,
        handleStartRecord,
        handleStopRecord,
        isLoading: isCreatingMeal || isLoadingMeal || isProcessingMeal,
        audioUri,
        onTryAgain,
        onConfirm: handleConfirm,
    };
}
