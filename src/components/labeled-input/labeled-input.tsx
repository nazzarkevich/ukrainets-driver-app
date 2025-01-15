import {
  Input,
  InputField,
  VStack,
  InputSlot,
  InputIcon,
  Text,
} from '@/components/ui';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';

import React, { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';

interface LabeledInput {
  label: string;
  placeholder: string;
  defaultValue: string;
  hasSecurityText?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
}

export const LabeledInput = ({
  label,
  placeholder,
  keyboardType,
  defaultValue,
  hasSecurityText = false,
  onChangeText,
}: LabeledInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <VStack space="xs">
      <Text className="text-typography-500">{label}</Text>

      <Input>
        <InputField
          autoCapitalize="none"
          placeholder={placeholder}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          secureTextEntry={hasSecurityText}
        />

        {hasSecurityText && (
          <InputSlot
            className="mr-2"
            onPress={() => setShowPassword(!showPassword)}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};
