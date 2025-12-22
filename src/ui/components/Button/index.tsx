import React from 'react';
import { ActivityIndicator, Platform, Pressable, View } from 'react-native';

import { AppText } from '../AppText';
import { buttonStyles, ButtonVariants, styles } from './styles';

interface IButtonProps extends React.ComponentProps<typeof Pressable>, Omit<ButtonVariants, 'disabled'> {
    isLoading?: boolean
}

export function Button({
  children,
  variant,
  size,
  isLoading = false,
  disabled,
  style,
  ...props
}: IButtonProps) {
  const childEl = (
    typeof children === 'string'
      ? <AppText weight="medium">{children}</AppText>
      : children
  );

  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
        style={({ pressed }) => [
          buttonStyles({ variant, size, disabled: disabled ? 'true' : 'false' }),
          pressed && Platform.OS === 'ios' && { opacity: 0.7 },
          typeof style === 'function' ? style({ pressed }) : style,
        ]}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? <ActivityIndicator /> : childEl }
      </Pressable>
    </View>
  );
}
