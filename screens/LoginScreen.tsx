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
      <Input error="Invalid symbols detected" isValid={(value) => (value.length > 2) ? 'more than two characters' : null} />
    </SafeAreaView>
  );
}

export default LoginScreen;
