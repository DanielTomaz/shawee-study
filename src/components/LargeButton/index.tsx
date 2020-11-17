import React from 'react';

import {
  LargeButtonDefault,
} from './styles';

export interface ILargeButtonProps{
  backgroundColor?: string,
  fontColor?: string,
  borderColor?: string,
  textButton: string,
};

const LargeButton: React.FC<ILargeButtonProps> = (props) => {
  return(
  <LargeButtonDefault backgroundColor={props.backgroundColor} borderColor={props.borderColor} 
  fontColor={props.fontColor}>{props.textButton}</LargeButtonDefault>
  )
};

export default LargeButton;