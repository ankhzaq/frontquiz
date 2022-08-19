import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import React, { useLayoutEffect } from 'react';


const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Input type="password" />
    </SafeAreaView>
  );
}

export default LoginScreen;
