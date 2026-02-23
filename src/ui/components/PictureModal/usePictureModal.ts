import { useCreateMeal } from '@app/hooks/mutations/useCreateMeal';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { useRef, useState } from 'react';

export function usePictureModalController() {
    const [permission, requestPermission] = useCameraPermissions();
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef<CameraView>(null);
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const {
        createMeal,
        isLoading: isCreatingMeal,
        createdMealId,
    } = useCreateMeal();

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

    async function onConfirm() {}

    return {
        isLoading,
        onTryAgain,
        onConfirm,
        permission,
        requestPermission,
        handleTakePicture,
        cameraRef,
        photoUri,
    };
}
