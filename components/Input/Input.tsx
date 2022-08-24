import React, { ChangeEvent, useEffect, useState } from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { EyeType, InputProps } from '../../interfaces/input';
import './Input.css';

const Spacer = (props: InputProps) => {

  const {
    errorMsg: errorMsgDefault = null,
    isValid,
    style = {},
    onChange: onChangeProps,
    showPassword: showPasswordDefault = false,
    type,
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState(showPasswordDefault);
  const [errorMsg, setErroMsg] = useState(errorMsgDefault);

  /* START - EYE ICON */

  useEffect(() => {
    setShowPassword(showPassword);
  }, [showPasswordDefault]);

  const onEyeIconClick = () => {
    setShowPassword(!showPassword);
  }

  const eyeIcon: EyeType = showPassword ? 'eye-with-line' : 'eye';

  const EyeIcon = type ? (
    <Entypo color="black" name={eyeIcon} onClick={onEyeIconClick} size={24} />
  ) : null;

  /* END - EYE ICON */

  /* START - TYPE */

  const typeInput = type === 'password' && !showPassword ? type : '';

  /* END - TYPE */


  /* START - CHECK VALUE IS VALID */

  useEffect(() => {
    setErroMsg(errorMsg);
  }, [errorMsgDefault]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const value = event.target?.value;
    const nextError = isValid ? isValid(value) : null;
    if (nextError !== errorMsg) {
      setErroMsg(nextError);
    }
    if (onChangeProps) onChangeProps(event);
  }

  /* END - CHECK VALUE IS VALID */

  /* START - CLASSNAMES AND STYLES */

  const ErrorMsg = !errorMsg ? null : (
    <div style={styles.errorMsg}>
      {/*@ts-ignore*/}
      <MaterialIcons color="black" name="error" size={24} style={styles.errorMsg} />
      {errorMsg}
    </div>
  );

  const styleErrorContainer = errorMsg ? styles.errorContainer : {};

  /* END - CLASSNAMES AND STYLES */

  return (
    <>
      {/*@ts-ignore */}
      <div className="container" style={{ ...styles.container, ...styleErrorContainer, ...style.container }}>
        {/*@ts-ignore */}
        <input className="input" onChange={onChange} style={{ ...styles.input, ...style.input }} type={typeInput} {...restProps} />
        {EyeIcon}
      </div>
      {ErrorMsg}
    </>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex'
  },
  errorContainer: {
    border: '1px solid var(--dark-red)',
  },
  errorMsg: {
    alignItems: 'center',
    color: 'var(--dark-red)',
    display: 'flex',
    padding: '2px'
  },
  input: {
    border: 'unset',
    fontSize: 15,
    padding: 10,
    width: '100%'
  },
};

export default Spacer;
