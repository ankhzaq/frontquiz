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
      <div>Before input</div>
      <Input />
      <div>After input</div>
    </SafeAreaView>
  );
}

export default LoginScreen;
