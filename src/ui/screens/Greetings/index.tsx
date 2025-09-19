import { styles } from './style';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import GreetingImg from '../../assets/greetings-bg/greeting-bkg.jpg';
import { Logo } from '@ui/components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@ui/components/Button';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';

export function Greetings() {
    return (
        <ImageBackground
            style={styles.container}
            source={GreetingImg}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.content}>
                <Logo width={200} height={150} />

                <View style={styles.ctaContainer}>
                    <AppText
                        weight="semiBold"
                        size="3xl"
                        color={theme.colors.white}
                        style={styles.heading}
                    >
                        {' '}
                        Controle sua dieta de forma simples{' '}
                    </AppText>
                    <View style={styles.ctaContent}>
                        <Button> Criar conta </Button>

                        <View style={styles.signInContainer}>
                            <AppText color={theme.colors.white}>
                                Ja tem uma conta?{' '}
                            </AppText>
                            <TouchableOpacity>
                                <AppText
                                    color={theme.colors.lime[500]}
                                    weight="medium"
                                >
                                    Acesse sua conta
                                </AppText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}
