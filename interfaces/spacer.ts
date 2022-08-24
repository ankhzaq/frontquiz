import React from 'react';

type paddingMargin = "5px" | "10px" | "15px" | "20px" | "25px" | "30px" | "35px" | "40px" | "45px" | "50px";

export interface SpacerProps {
  children: React.ReactElement,
  margin?: paddingMargin,
  marginBottom?: paddingMargin,
  marginLeft?: paddingMargin,
  marginRight?: paddingMargin,
  marginTop?: paddingMargin,
  padding?: paddingMargin,
  paddingBottom?: paddingMargin,
  paddingLeft?: paddingMargin,
  paddingRight?: paddingMargin,
  paddingTop?: paddingMargin,

}
