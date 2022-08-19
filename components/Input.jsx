import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';

const CONSTANTS = {
  eye: 'eye',
  eyeCrossed: 'eye-with-line'
}

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    style = {},
    type,
    ...restProps
  } = props;

  /* START - EYE ICON */

  useEffect(() => {
    if (props.type && props.type === 'password') {

    }
  }, []);

  const onEyeIconClick = () => {
    setShowPassword(!showPassword);
  }

  const eyeIcon = showPassword ? CONSTANTS.eyeCrossed : CONSTANTS.eye;

  const EyeIcon = type ? (
    <Entypo color="black" name={eyeIcon} onClick={onEyeIconClick} size={24} />
  ) : null;

  /* END - EYE ICON */

  /* START - TYPE */

  const typeInput = type === 'password' && !showPassword ? type : '';

  /* END - TYPE */

  return (
    <div style={{ ...styles.container, ...style.container }}>
      <input style={{ ...styles.input, ...style.input }} type={typeInput}{...restProps} />
      {EyeIcon}
    </div>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex'
  },
  input: {
    border: 'unset',
    fontSize: 15,
    padding: 10,
    width: '100%'
  },
};

export default Input;
