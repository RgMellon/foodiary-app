import { Image, StatusBar, View } from 'react-native';
import { styles } from './style';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { ChevronLeft } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Header() {
    const { goBack } = useNavigation();
    const { top } = useSafeAreaInsets();

    const inputTypeImage = false;

    return (
        <>
            <StatusBar translucent animated barStyle={'light-content'} />
            <View style={styles.container}>
                {inputTypeImage && (
                    <Image
                        source={{
                            uri: 'https://phygital-files.mercafacil.com/tartufo-bucket/uploads/produto/marmita_do_chef_carne_moida_400g_37f7e682-655d-4378-be47-a63badcb844c.png',
                        }}
                        style={styles.image}
                    />
                )}

                <View
                    style={[
                        styles.content,
                        {
                            marginTop: !inputTypeImage ? top : 0,
                        },
                    ]}
                >
                    <View style={styles.pageTitleContainer}>
                        <Button variant="ghost" onPress={goBack}>
                            <ChevronLeft size={14} color={theme.colors.white} />
                        </Button>
                        <AppText color={theme.colors.white}>Refeição</AppText>
                    </View>

                    <View style={styles.caloriesContainer}>
                        <AppText color={theme.colors.gray['300']}>
                            Calorias
                        </AppText>

                        <AppText color={theme.colors.white} weight="semiBold">
                            {' '}
                            500
                        </AppText>
                    </View>
                </View>
            </View>
        </>
    );
}
