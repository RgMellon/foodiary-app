import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { useMeal } from '@app/hooks/query/useMealDetail';
import { AppStackNavigationprops } from '@app/navigation/AppStack';
import { MealStatus } from '@app/types/MealStatus';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

interface IUsePictureModalControllerParams {
    onClose: () => void;
    onCreate?: () => void;
}

export function usePictureModalController({
    onClose,
    onCreate,
}: IUsePictureModalControllerParams) {
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const { navigate } = useNavigation<AppStackNavigationprops>();
    const queryClient = useQueryClient();

    const memoizedOnClose = useRef(onClose);
    const memoizedOnCreate = useRef(onCreate);

    useLayoutEffect(() => {
        memoizedOnClose.current = onClose;
    }, [onClose]);

    useLayoutEffect(() => {
        memoizedOnCreate.current = onCreate;
    }, [onCreate]);

    const {
        createMeal,
        isLoading: isCreatingMeal,
        createdMealId,
    } = useCreateMeal();

    const {
        isLoading: isLoadingMeal,
        isProcessing: isProcessingMeal,
        meal,
    } = useMeal(createdMealId);

    useEffect(() => {
        if (meal?.status === MealStatus.FAILED) {
            Alert.alert('Opss...', 'Ocorreu um erro, tente novamente!');
        }
        if (meal?.status === MealStatus.SUCCESS) {
            memoizedOnClose.current();
            memoizedOnCreate.current?.();
            queryClient.invalidateQueries({ queryKey: ['meals'] });
            navigate('MealDetail', { meailId: meal.id });
        }
    }, [meal?.status, meal?.id]);

    async function handleTakePicture() {
        if (!cameraRef.current) {
            return;
        }

        try {
            const photo = await cameraRef.current.takePictureAsync({
                imageType: 'jpg',
            });
            setPhotoUri(photo.uri);
        } catch (error) {
            console.error('Error taking picture:', error);
        }
    }

    async function onTryAgain() {
        setPhotoUri(null);
    }

    async function onConfirm() {
        if (!photoUri) {
            return;
        }

        try {
            await createMeal(photoUri);
        } catch (err) {
            console.error('Error creating meal:', err);
            Alert.alert(
                'Oops!',
                'Ocorreu um erro ao criar a sua refeição! Tente novamente.',
            );
        }
    }

    return {
        isLoading: isCreatingMeal || isLoadingMeal || isProcessingMeal,
        onTryAgain,
        onConfirm,
        permission,
        requestPermission,
        handleTakePicture,
        cameraRef,
        photoUri,
    };
}
