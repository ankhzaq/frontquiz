import { storiesOf } from '@storybook/react-native';
import Text from '../../../components/Text/Text';
import React from 'react';

storiesOf('Text', module)
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add('Basic text', () => (
    <Text
      text="email has been sent to you email. Please, check it."
    />
  )).add('Bold text', () => (
  <Text
    style="bold"
    text="email has been sent to you email. Please, check it."
  />
)).add('Basic dangerousHTML', () => (
  <Text
    dangerousHTML="email has been sent to you <b>email</b>. Please, check it."
  />
));
