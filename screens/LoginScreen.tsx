import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input/Input';
import React, { useLayoutEffect } from 'react';
import Button from '../components/Button/Button';
import { AntDesign } from '@expo/vector-icons';


const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Input isValid={(value) => (value.length > 2) ? 'more than two characters' : null} />
      <Button
        leftIcon={
          <AntDesign name="google" size={24} color="black" />
        }
        outlined={false}
        text="Sign in with Google"
      />
    </SafeAreaView>
  );
}

export default LoginScreen;
