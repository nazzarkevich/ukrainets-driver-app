import {
  Input,
  InputField,
  Button,
  ButtonText,
  VStack,
  Box,
  InputSlot,
  InputIcon,
} from '@/components/ui';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { Loader, ScreenContainer, View, useRootStore } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export const LoginScreen = observer(function LoginScreen({
  navigation,
}: RootDrawerScreenProps<'LoginScreen'>) {
  const { userStore } = useRootStore();
  const [showPassword, setShowPassword] = useState(false);

  //   useEffect(() => {
  //     userStore.fetchUserDetails();
  //   }, []);

  // if (userStore.isUserLoading) {
  if (userStore.isUserLoading) {
    return (
      <ScreenContainer>
        <View>
          <Loader />
        </View>
      </ScreenContainer>
    );
  }

  return (
    <View className="flex-1 items-center justify-center px-4">
      <Box className="min-w-[300px]">
        <VStack space="md">
          <Input>
            <InputField
              placeholder="Email"
              defaultValue={userStore.email}
              onChangeText={(email) => userStore.setEmail(email)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Input>

          <Input>
            <InputField
              placeholder="Password"
              defaultValue={userStore.password}
              onChangeText={(text) => userStore.setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <InputSlot
              className="mr-2"
              onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
          <Button onPress={userStore.login} size="md">
            {/* <Button onPress={() => console.log('click')} size="md"> */}
            <ButtonText>Увійти</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
});
