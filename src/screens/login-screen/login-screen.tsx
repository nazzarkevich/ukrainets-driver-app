import {
  Button,
  ButtonText,
  VStack,
  Box,
  Heading,
  ButtonSpinner,
} from '@/components/ui';
import { observer } from 'mobx-react';
import React from 'react';

import colors from 'tailwindcss/colors';
import { RootDrawerScreenProps } from 'src/types';
import { LabeledInput, View, useRootStore } from 'src/components';

export const LoginScreen = observer(function LoginScreen({
  navigation,
}: RootDrawerScreenProps<'LoginScreen'>) {
  const { userStore } = useRootStore();
  const isDisabledLoginButton = !userStore.email && !userStore.password;

  return (
    <View className="flex-1 items-center justify-center px-4">
      <Box className="min-w-[300px]">
        <VStack space="md">
          <Heading size="3xl" className="text-typography-900">
            Привіт 👋
          </Heading>

          <LabeledInput
            label="Пошта"
            placeholder="Ваш e-mail"
            keyboardType="email-address"
            defaultValue={userStore.email}
            onChangeText={(email) => userStore.setEmail(email)}
          />

          <LabeledInput
            label="Пароль"
            hasSecurityText
            placeholder="Password"
            defaultValue={userStore.password}
            onChangeText={(text) => userStore.setPassword(text)}
          />

          <Button
            size="md"
            className="flex-row items-center"
            onPress={userStore.login}
            disabled={isDisabledLoginButton}>
            {userStore.isUserLoading && (
              <ButtonSpinner color={colors.gray[400]} />
            )}

            <ButtonText className="ml-2">Увійти</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
});
