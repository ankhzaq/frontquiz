
import React from 'react';
import { SpacerProps } from '../../interfaces/spacer';

const Spacer = (props: SpacerProps) => {

  const {
    children,
    ...restProps
  } = props;

  return (
    <span style={{...restProps}}>
      {children}
    </span>
  );
};

export default Spacer;
