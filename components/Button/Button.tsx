import React from 'react';
import './Button.css';
import { ButtonProps } from '../../interfacesTypes/button';

const Button = (props: ButtonProps) => {

  const {
    leftIcon,
    onClick,
    outlined = true,
    style = {},
    text
  } = props;

  const notOutlinedClass = outlined ? '' : 'notOutlined'

  return (
    <span className={notOutlinedClass} style={{ ...styles.container, ...style }} onClick={onClick}>
      {leftIcon}
      {text}
    </span>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    color: 'var(--dark-gray)',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '20px',
    padding: '5px',
    width: 'fit-content',
  }
};

export default Button;
