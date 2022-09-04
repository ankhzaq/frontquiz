import { SafeAreaView } from 'react-native';
import Input from '../components/Input/Input';
import React, { useLayoutEffect } from 'react';
import Button from '../components/Button/Button';
import { AntDesign } from '@expo/vector-icons';
import Spacer from '../components/Spacer/Spacer';
import Text from '../components/Text/Text';

// @ts-ignore
const LoginScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Input isValid={(value) => (value.length > 2) ? 'more than two characters' : null} />
      <Spacer marginTop="25px">
        <Button
          text="Navigate to Storybook"
          onClick={() => navigation.navigate('Storybook')}/>
      </Spacer>
      <Spacer marginTop="15px">
        <Button
          leftIcon={
            <AntDesign name="google" size={24} color="black" />
          }
          outlined={false}
          text="Sign in with Google"
          onClick={() => console.log("Button")}/>
      </Spacer>
      <Spacer margin="15px">
        <Text text="This is an example" style="bold" />
      </Spacer>
    </SafeAreaView>
  );
}

export default LoginScreen;
