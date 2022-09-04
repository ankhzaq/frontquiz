import React from 'react';
import { TextProps } from '../../interfacesTypes/text';

const Text = (props: TextProps) => {

  const {
    dangerousHTML,
    style,
    text,
  } = props;

  const styleToApply = style ? styles[style] : {};

  return (
    <div style={{ ...styleToApply }} dangerouslySetInnerHTML={{ __html: dangerousHTML || text || '' }} />
  );
};

const styles = {
  bold: {
    fontWeight: 600
  }
};

export default Text;
