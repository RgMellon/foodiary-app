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

export function BirthDate() {
    const isIOS = Platform.OS === 'ios';
    const { nextStep } = useOnboard();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(true);

    function handleSelectDate(_: DateTimePickerEvent, newDate?: Date) {
        if (!newDate) {
            return;
        }
        setDate(newDate);
        setShow(isIOS);
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
                {show && (
                    <RNDateTimePicker
                        onChange={handleSelectDate}
                        display={isIOS ? 'spinner' : 'default'}
                        mode="date"
                        value={date}
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
                            {date.toLocaleDateString('pt-BR')}
                        </AppText>
                    </TouchableOpacity>
                )}
            </StepContent>

            <StepFooter>
                <Button size="icon" onPress={nextStep}>
                    <ArrowRight />
                </Button>
            </StepFooter>
        </Step>
    );
}
