import { View, ScrollView } from 'react-native';
import { Controller } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';

import { styles } from './style';
import { AppText } from '@ui/components/AppText';
import { Input } from '@ui/components/Input';
import { FormGroup } from '@ui/components/FormGroup';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { useGoalsController } from './useGoalsController';

export function Goals() {
    const { top } = useSafeAreaInsets();
    const { form, onSubmit, isLoading, goBack } = useGoalsController();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Button variant="ghost" onPress={goBack}>
                        <ChevronLeft
                            size={20}
                            color={theme.colors.black[700]}
                        />
                    </Button>
                    <AppText size="base" weight="bold">
                        Definir Metas
                    </AppText>
                </View>
            </View>
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <AppText color={theme.colors.gray[700]}>
                    Configure suas metas diárias de nutrição
                </AppText>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        name="calories"
                        render={({ field: { onChange, value } }) => (
                            <FormGroup
                                label="Calorias (kcal)"
                                error={errors.calories?.message}
                            >
                                <Input
                                    placeholder="Ex: 2000"
                                    keyboardType="numeric"
                                    value={value?.toString()}
                                    onChangeText={(text) =>
                                        onChange(Number(text) || 0)
                                    }
                                />
                            </FormGroup>
                        )}
                    />

                    <Controller
                        control={control}
                        name="proteins"
                        render={({ field: { onChange, value } }) => (
                            <FormGroup
                                label="Proteínas (g)"
                                error={errors.proteins?.message}
                            >
                                <Input
                                    placeholder="Ex: 150"
                                    keyboardType="numeric"
                                    value={value?.toString()}
                                    onChangeText={(text) =>
                                        onChange(Number(text) || 0)
                                    }
                                />
                            </FormGroup>
                        )}
                    />

                    <Controller
                        control={control}
                        name="carbohydrates"
                        render={({ field: { onChange, value } }) => (
                            <FormGroup
                                label="Carboidratos (g)"
                                error={errors.carbohydrates?.message}
                            >
                                <Input
                                    placeholder="Ex: 250"
                                    keyboardType="numeric"
                                    value={value?.toString()}
                                    onChangeText={(text) =>
                                        onChange(Number(text) || 0)
                                    }
                                />
                            </FormGroup>
                        )}
                    />

                    <Controller
                        control={control}
                        name="fat"
                        render={({ field: { onChange, value } }) => (
                            <FormGroup
                                label="Gorduras (g)"
                                error={errors.fat?.message}
                            >
                                <Input
                                    placeholder="Ex: 70"
                                    keyboardType="numeric"
                                    value={value?.toString()}
                                    onChangeText={(text) =>
                                        onChange(Number(text) || 0)
                                    }
                                />
                            </FormGroup>
                        )}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Salvando...' : 'Salvar Metas'}
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
