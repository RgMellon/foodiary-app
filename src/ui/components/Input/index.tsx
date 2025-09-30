import { TextInput, NativeSyntheticEvent, TargetedEvent, TextInputProps } from 'react-native';
import { inputStyles } from './styles';
import { theme } from '@ui/styles/theme';
import { useState } from 'react';

type BaseProps = Omit<React.ComponentProps<typeof TextInput>, 'readOnly'>;

interface IInputProps extends BaseProps {
    error?: boolean
    disabled?: boolean
    InputComponent?: React.ComponentType<TextInputProps>
    ref?: React.Ref<TextInput>
}

export function Input({ error, disabled, style, onFocus, onBlur,
    InputComponent = TextInput,
    ...props }: IInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(event: NativeSyntheticEvent<TargetedEvent>) {
        setIsFocused(true);
        onFocus?.(event);
    }

    function handleBlur(event: NativeSyntheticEvent<TargetedEvent>) {
        setIsFocused(false);
        onBlur?.(event);
    }

    return (
        <InputComponent
            style={[
                inputStyles({
                    status: error? 'error' : (isFocused ? 'focus': 'default'),
                    disabled: disabled ? 'true':'false',
                }),
                style,
            ]}
            placeholderTextColor={theme.colors.gray[700]}
            placeholder="E-mail"
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={disabled}
            {...props}
        />
    );
}
