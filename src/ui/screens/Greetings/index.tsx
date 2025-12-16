import { styles } from './style';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import GreetingImg from '../../assets/greetings-bg/greeting-bkg.jpg';
import { Logo } from '@ui/components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@ui/components/Button';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { SignInBottomSheet } from '@ui/components/SignInBottomSheet';
import { useRef } from 'react';
import { ISignInBottomSheet } from '@ui/components/SignInBottomSheet/ISignInBottomSheet';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationprops } from '@app/navigation/AuthStack';

export function Greetings() {
    const signInBottomSheetRef = useRef<ISignInBottomSheet>(null);
    const { navigate } = useNavigation<AuthStackNavigationprops>();
    return (
        <>
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
                            <Button
                                onPress={() => {
                                    navigate('OnBoarding');
                                }}
                            >
                                Criar conta
                            </Button>

                            <View style={styles.signInContainer}>
                                <AppText color={theme.colors.white}>
                                    Ja tem uma conta?{' '}
                                </AppText>
                                <TouchableOpacity
                                    onPress={() => {
                                        signInBottomSheetRef.current?.open();
                                    }}
                                >
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

            <SignInBottomSheet ref={signInBottomSheetRef} />
        </>
    );
}
