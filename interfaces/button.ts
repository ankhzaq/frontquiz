import React from 'react';

export interface ButtonProps {
  leftIcon?: React.ReactElement,
  onClick: (event: MouseEvent) => void
  outlined?: boolean,
  text?: string,
  style?: object
}
