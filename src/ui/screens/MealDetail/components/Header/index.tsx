import { ImageBackground, StatusBar, View } from 'react-native';
import { styles } from './style';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { ChevronLeft } from 'lucide-react-native';
import { theme } from '@ui/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { InputType, Meal } from '@app/types/Meal';
import { useMemo } from 'react';

interface IHeaderProps {
    meal: Meal | undefined;
}

export function Header({ meal }: IHeaderProps) {
    const { goBack } = useNavigation();
    const { top } = useSafeAreaInsets();

    const inputTypeImage = meal?.inputType === InputType.PICTURE;

    const summary = useMemo(() => {
        return (meal?.foods || []).reduce(
            (acc, food) => {
                const proteinCalories = food.proteins * 4;
                const carbohydratesCalories = food.carbohydrates * 4;
                const fatCalories = food.fat * 9;

                const totalCalories =
                    proteinCalories + carbohydratesCalories + fatCalories;

                return {
                    calories: acc.calories + totalCalories,
                    fat: acc.fat + food.fat,
                    proteins: acc.proteins + food.proteins,
                    carbohydrates: acc.carbohydrates + food.carbohydrates,
                };
            },
            {
                calories: 0,
                fat: 0,
                proteins: 0,
                carbohydrates: 0,
            },
        );
    }, [meal?.foods]);

    const percentageMacros = useMemo(() => {
        const proteinCalories = summary.proteins * 4;
        const carbohydratesCalories = summary.carbohydrates * 4;
        const fatCalories = summary.fat * 9;

        if (summary.calories === 0) {
            return {
                fat: 0,
                proteins: 0,
                carbohydrates: 0,
            };
        }

        return {
            fat: (fatCalories / summary.calories) * 100,
            proteins: (proteinCalories / summary.calories) * 100,
            carbohydrates: (carbohydratesCalories / summary.calories) * 100,
        };
    }, [summary]);

    return (
        <>
            <StatusBar translucent animated barStyle={'light-content'} />
            {inputTypeImage && (
                <ImageBackground
                    source={{
                        uri: 'https://phygital-files.mercafacil.com/tartufo-bucket/uploads/produto/marmita_do_chef_carne_moida_400g_37f7e682-655d-4378-be47-a63badcb844c.png',
                    }}
                    style={styles.image}
                >
                    <LinearGradient
                        start={{ y: 0.5, x: 0 }}
                        end={{ y: 1, x: 0 }}
                        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.3)']}
                        style={[styles.gradient, { paddingTop: top }]}
                    >
                        <Button variant="ghost" onPress={goBack}>
                            <ChevronLeft size={20} color={theme.colors.white} />
                        </Button>
                    </LinearGradient>
                </ImageBackground>
            )}
            <View style={styles.container}>
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
                            {summary?.calories.toFixed(0)} kcal
                        </AppText>
                    </View>
                </View>
            </View>

            <View style={styles.macroContainer}>
                <View style={styles.macroItem}>
                    <AppText color={theme.colors.gray['700']}>Proteina</AppText>

                    <AppText weight="bold" color={theme.colors.support.teal}>
                        {summary?.proteins.toFixed(0)}g ({' '}
                        {percentageMacros.proteins.toFixed(0)}%)
                    </AppText>
                </View>

                <View style={styles.macroItem}>
                    <AppText color={theme.colors.gray['700']}>
                        Carboidrato
                    </AppText>

                    <AppText weight="bold" color={theme.colors.support.yellow}>
                        {summary?.carbohydrates.toFixed(0)}g (
                        {percentageMacros.carbohydrates.toFixed(0)}%)
                    </AppText>
                </View>

                <View style={styles.macroItem}>
                    <AppText color={theme.colors.gray['700']}>Gordura</AppText>

                    <AppText weight="bold" color={theme.colors.support.orange}>
                        {summary?.fat.toFixed(0)}g (
                        {percentageMacros.proteins.toFixed(0)}%)
                    </AppText>
                </View>
            </View>

            <View style={styles.statusBarContainer}>
                <View
                    style={[
                        styles.macroItem,
                        {
                            width: `${percentageMacros.proteins}%`,
                            backgroundColor: theme.colors.support.teal,
                        },
                    ]}
                ></View>

                <View
                    style={[
                        styles.macroItem,
                        {
                            width: `${percentageMacros.carbohydrates}%`,
                            backgroundColor: theme.colors.support.yellow,
                        },
                    ]}
                ></View>

                <View
                    style={[
                        styles.macroItem,
                        {
                            width: `${percentageMacros.fat}%`,
                            backgroundColor: theme.colors.support.orange,
                            flex: 1,
                        },
                    ]}
                ></View>
            </View>

            <View style={styles.separator} />

            <View style={styles.mealTitleContainer}>
                <AppText size="xl" weight="bold">
                    {meal?.name}
                </AppText>

                <AppText color={theme.colors.gray[700]}>Itens</AppText>
            </View>
        </>
    );
}
