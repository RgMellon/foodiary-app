import { Image, Modal, StatusBar, View } from 'react-native';
import { Button } from '../Button';
import {
    CameraIcon,
    CheckIcon,
    Trash2Icon,
    UnlockIcon,
    XIcon,
} from 'lucide-react-native';
import { styles } from './styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@ui/styles/theme';
import { AppText } from '../AppText';
import { CreateMealLoader } from '../CreateMealLoader';
import { usePictureModalController } from './usePictureModalController';
import { CameraView } from 'expo-camera';

interface IPictureModalProps {
    onClose: () => void;
    onCreate?: () => void;
    visible: boolean;
}

export function PictureModal({
    visible,
    onClose,
    onCreate,
}: IPictureModalProps) {
    const {
        onConfirm,
        onTryAgain,
        isLoading,
        permission,
        requestPermission,
        handleTakePicture,
        cameraRef,
        photoUri,
    } = usePictureModalController({ onClose, onCreate });

    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
            transparent
            statusBarTranslucent
        >
            <StatusBar translucent barStyle={'light-content'} animated />
            {isLoading && <CreateMealLoader type="picture" />}

            {!isLoading && permission && (
                <View style={styles.container}>
                    <SafeAreaProvider>
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.header}>
                                <Button
                                    size="icon"
                                    variant="neutral"
                                    onPress={onClose}
                                >
                                    <XIcon color={theme.colors.gray[600]} />
                                </Button>
                            </View>

                            {!permission.granted && (
                                <>
                                    <View style={styles.body}>
                                        <AppText color={theme.colors.gray[400]}>
                                            Para registrar sua refeição com uma
                                            foto, precisamos de acesso ao seu
                                            dispositivo
                                        </AppText>
                                        <Button
                                            onPress={requestPermission}
                                            leftIcon={UnlockIcon}
                                        >
                                            Conceder acesso a camera
                                        </Button>
                                    </View>
                                </>
                            )}

                            {permission?.granted && (
                                <>
                                    <View style={styles.body}>
                                        {!photoUri && (
                                            <CameraView
                                                ref={cameraRef}
                                                style={styles.camera}
                                                facing="back"
                                            />
                                        )}

                                        {photoUri && (
                                            <Image
                                                source={{ uri: photoUri }}
                                                style={styles.camera}
                                            />
                                        )}
                                    </View>

                                    <View style={styles.footer}>
                                        <View style={styles.actionsContainer}>
                                            {!photoUri && (
                                                <>
                                                    <Button
                                                        size="icon"
                                                        variant="neutral"
                                                        onPress={
                                                            handleTakePicture
                                                        }
                                                    >
                                                        <CameraIcon
                                                            size={20}
                                                            color={
                                                                theme.colors
                                                                    .lime[600]
                                                            }
                                                        />
                                                    </Button>

                                                    <AppText
                                                        color={
                                                            theme.colors
                                                                .gray[600]
                                                        }
                                                        style={{
                                                            maxWidth: 190,
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        Tirar foto
                                                    </AppText>
                                                </>
                                            )}

                                            {photoUri && (
                                                <View
                                                    style={styles.actionGroup}
                                                >
                                                    <Button
                                                        variant="neutral"
                                                        size="icon"
                                                        onPress={onTryAgain}
                                                    >
                                                        <Trash2Icon
                                                            color={
                                                                theme.colors
                                                                    .gray[500]
                                                            }
                                                        />
                                                    </Button>

                                                    <Button
                                                        size="icon"
                                                        onPress={onConfirm}
                                                    >
                                                        <CheckIcon
                                                            color={
                                                                theme.colors
                                                                    .black[700]
                                                            }
                                                        />
                                                    </Button>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </>
                            )}
                        </SafeAreaView>
                    </SafeAreaProvider>
                </View>
            )}
        </Modal>
    );
}
