import { TouchableOpacity, View } from 'react-native';
import { Styles } from './style';
import { AppText } from '../AppText';
import { theme } from '@ui/styles/theme';
import { createContext, useContext, useState } from 'react';

interface IRadioGroupContextValue {
    value: string | null;
    setValue: (value: string | null) => void;
    isHorizontal: boolean;
}

const RadioGroupContext = createContext({} as IRadioGroupContextValue);

interface IRadioGroupProps {
    children: React.ReactNode;
    initialValue?: string;
    orientation?: 'vertical' | 'horizontal';
}

export function RadioGroup({
    children,
    initialValue,
    orientation = 'vertical',
}: IRadioGroupProps) {
    const [value, setValue] = useState<string | null>(initialValue ?? null);
    const isHorizontal = orientation === 'horizontal';

    return (
        <RadioGroupContext.Provider
            value={{
                setValue,
                value,
                isHorizontal,
            }}
        >
            <View
                style={[
                    Styles.container,
                    isHorizontal && Styles.containerHorizontal,
                ]}
            >
                {children}
            </View>
        </RadioGroupContext.Provider>
    );
}

interface IRadiouGroupItem {
    children: React.ReactNode;
    value: string;
}

export function RadioGroupItem({ children, value }: IRadiouGroupItem) {
    const {
        value: selectedValue,
        setValue,
        isHorizontal,
    } = useContext(RadioGroupContext);
    const isSelected = selectedValue === value;

    return (
        <TouchableOpacity
            onPress={() => setValue(value)}
            style={[
                Styles.item,
                isSelected && Styles.itemSelected,
                isHorizontal && Styles.itemHorizontal,
            ]}
        >
            {children}
        </TouchableOpacity>
    );
}

export function RadioGroupIcon({ children }: { children: string }) {
    return (
        <View style={Styles.icon}>
            <AppText>{children}</AppText>
        </View>
    );
}

export function RadioGroupLabel({ children }: { children: React.ReactNode }) {
    const { isHorizontal } = useContext(RadioGroupContext);

    return (
        <AppText weight="semiBold" style={[isHorizontal && Styles.textCenter]}>
            {children}
        </AppText>
    );
}

export function RadioGroupDescription({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isHorizontal } = useContext(RadioGroupContext);

    return (
        <AppText
            size="sm"
            color={theme.colors.gray[700]}
            style={[isHorizontal && Styles.textCenter]}
        >
            {children}
        </AppText>
    );
}

export function RadiouGroupItemWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <View style={Styles.wrapper}>{children}</View>;
}
