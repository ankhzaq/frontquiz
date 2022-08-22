import React from 'react';

export interface InputProps {
  errorMsg?: string | null;
  isValid?: (value: string) => string | null;
  style?: object
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  type?: string;
}

export type EyeType = 'eye' | 'eye-with-line';
