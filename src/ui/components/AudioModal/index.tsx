import { Modal, StatusBar, View } from 'react-native';
import { Button } from '../Button';
import { XIcon } from 'lucide-react-native';
import { styles } from './styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@ui/styles/theme';
import { AppText } from '../AppText';
import { useModalAudioController } from './useAudioModalControlle';
import { Action } from './component/Action';
import { CreateMealLoader } from '../CreateMealLoader';

interface IAudioModalProps {
    onClose: () => void;
    visible: boolean;
}

export function AudioModal({ visible, onClose }: IAudioModalProps) {
    const {
        state,
        handleStartRecord,
        handleStopRecord,
        isLoading,
        audioUri,
        onConfirm,
        onTryAgain,
    } = useModalAudioController();

    const isRecording = state === 'recording';

    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
            transparent
            statusBarTranslucent
        >
            <StatusBar translucent barStyle={'light-content'} animated />
            {isLoading && <CreateMealLoader type="audio" />}

            {!isLoading && (
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

                            <View style={styles.body}>
                                <View
                                    style={[
                                        styles.circler1,
                                        isRecording && styles.circler1Recording,
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.circler2,
                                            isRecording &&
                                                styles.circler2Recording,
                                        ]}
                                    >
                                        <View
                                            style={[
                                                styles.circler3,
                                                isRecording &&
                                                    styles.circler3Recording,
                                            ]}
                                        ></View>
                                    </View>
                                </View>

                                <AppText
                                    color={theme.colors.gray[600]}
                                    style={styles.info}
                                >
                                    Tente dizer algo como: 100g de arroz, 2 ovos
                                    e 100g de salada
                                </AppText>
                            </View>

                            <View style={styles.footer}>
                                <View style={styles.actionsContainer}>
                                    <Action
                                        onConfirm={onConfirm}
                                        onTryAgain={onTryAgain}
                                        audioUri={audioUri}
                                        state={state}
                                        handleStopRecord={handleStopRecord}
                                        handleStartRecord={handleStartRecord}
                                    />
                                </View>
                            </View>
                        </SafeAreaView>
                    </SafeAreaProvider>
                </View>
            )}
        </Modal>
    );
}
