import React, { useState } from 'react';
import {
    Step,
    StepContent,
    StepFooter,
    StepHeader,
    StepSubTitle,
    StepTitle,
} from '../components/Step';
import { Button } from '@ui/components/Button';
import { ArrowRight } from 'lucide-react-native';
import { useOnboard } from '../context/useOnboard';
import RNDateTimePicker, {
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Platform, TouchableOpacity } from 'react-native';
import { AppText } from '@ui/components/AppText';
import { theme } from '@ui/styles/theme';
import { OnboardingSchema } from '../schema';
import { Controller, useFormContext } from 'react-hook-form';

export function BirthDate() {
    const isIOS = Platform.OS === 'ios';
    const { nextStep } = useOnboard();
    const [show, setShow] = useState(true);
    const form = useFormContext<OnboardingSchema>();

    function handleSelectDate(_: DateTimePickerEvent, newDate?: Date) {
        if (!newDate) {
            return;
        }
        form.setValue('birthDate', newDate);
        setShow(isIOS);
    }

    async function handleNextStep() {
        const isValid = await form.trigger('birthDate');
        if (isValid) {
            nextStep();
        }
    }

    return (
        <Step>
            <StepHeader>
                <StepTitle>Data de nascimento?</StepTitle>
                <StepSubTitle>
                    Cada faixa etaria responde de uma forma unica
                </StepSubTitle>
            </StepHeader>
            <StepContent position="center">
                <Controller
                    name="birthDate"
                    control={form.control}
                    render={({ field }) => (
                        <>
                            {show && (
                                <RNDateTimePicker
                                    onChange={handleSelectDate}
                                    display={isIOS ? 'spinner' : 'default'}
                                    mode="date"
                                    value={field.value}
                                />
                            )}

                            {!isIOS && (
                                <TouchableOpacity
                                    onPress={() => {
                                        setShow(true);
                                    }}
                                >
                                    <AppText
                                        weight="semiBold"
                                        size="3xl"
                                        color={theme.colors.gray['700']}
                                    >
                                        {field.value.toLocaleDateString(
                                            'pt-BR',
                                        )}
                                    </AppText>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                />
            </StepContent>

            <StepFooter>
                <Button size="icon" onPress={handleNextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
