import { Modal, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Button } from '../Button';
import { AppText } from '../AppText';
import { theme } from '@ui/styles/theme';
import { GoalStats } from '../GoalStats';
import { useAuth } from '@app/context/AuthContext/useAuth';
import { useState } from 'react';
import { Goal } from '@app/types/Goal';

const goalMap: Record<Goal, { icon: string; label: string }> = {
    GAIN: {
        icon: '🥩',
        label: 'Ganhar peso',
    },
    LOSE: {
        icon: '🥦',
        label: 'Perder peso',
    },

    MAINTAIN: {
        icon: '🍍',
        label: 'Manter peso',
    },
};

export function Welcome() {
    const { signedUp, account } = useAuth();
    const [isOpen, setIsOpen] = useState(signedUp);

    function handleClose() {
        setIsOpen(false);
    }
    return (
        <Modal
            statusBarTranslucent
            transparent
            onRequestClose={handleClose}
            visible={isOpen}
            animationType="fade"
        >
            <StatusBar animated translucent barStyle={'light-content'} />

            <SafeAreaProvider>
                <View style={styles.container}>
                    <SafeAreaView style={styles.wrapper}>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <View style={styles.icon}>
                                    <AppText>
                                        {goalMap[account!.profile!.goal].icon}
                                    </AppText>
                                </View>

                                <View style={styles.headerContent}>
                                    <AppText
                                        size="3xl"
                                        weight="semiBold"
                                        style={{
                                            textAlign: 'center',
                                            maxWidth: 300,
                                        }}
                                        color={theme.colors.gray['100']}
                                    >
                                        Seu plano de dieta pra{' '}
                                        <Text
                                            style={{
                                                color: theme.colors.support
                                                    .yellow,
                                                paddingLeft: 10,
                                            }}
                                        >
                                            {goalMap[account!.profile!.goal].label}
                                        </Text>{' '}
                                        está pronto
                                    </AppText>

                                    <AppText
                                        style={{ textAlign: 'center' }}
                                        color={theme.colors.gray['600']}
                                    >
                                        Essa é uma recomendação diária para o
                                        seu plano, fique tranquilo você podera
                                        editar depois.
                                    </AppText>

                                    <View style={styles.body}>
                                        <GoalStats
                                            calories={{
                                                goal: 200,
                                            }}
                                            carbohydrates={{
                                                goal: 200,
                                            }}
                                            proteins={{
                                                goal: 200,
                                            }}
                                            fats={{ goal: 200 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <Button onPress={handleClose}>
                                Começar meu plano
                            </Button>
                        </View>
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        </Modal>
    );
}
