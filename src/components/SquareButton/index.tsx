import React from 'react';

import {
  SquareButtonContainer,
  TextNumberSquareButton,
  IconSquareButton,
  TextSquareButton,
} from './styles';

export interface ISquareButtonProps {
  textNumber: string,
  icon: string,
  textSquareButton: string,
  primary?: string,
  secondary?: string,
  tertiary?: string,
  quaternary?: string,
};

const SquareButton: React.FC<ISquareButtonProps> = (props) => {
  return(
    <SquareButtonContainer primary={props.primary} secondary={props.secondary}
    tertiary={props.tertiary} quaternary={props.quaternary}>
      <TextNumberSquareButton>{props.textNumber}</TextNumberSquareButton>
      <IconSquareButton src={props.icon}/>
      <TextSquareButton>{props.textSquareButton}</TextSquareButton>
    </SquareButtonContainer>
  )
};

export default SquareButton;