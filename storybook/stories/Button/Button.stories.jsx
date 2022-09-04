import { storiesOf } from '@storybook/react-native';
import Button from '../../../components/Button/Button';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

storiesOf('Button', module)
  .add('Basic button', () => (
    <Button
      leftIcon={
        <AntDesign name="google" size={24} color="black" />
      }
      outlined={false}
      text="Sign in with Google"
      onClick={() => console.log("Button")}/>
  ));
