import React from 'react';

import{
  ButtonPinkSmall,
} from './styles';

export interface ISmallPinkButton{
  text: string,
};

const SmallPinkButton: React.FC<ISmallPinkButton> = (props) => {
  return(
  <ButtonPinkSmall>{props.text}</ButtonPinkSmall>
  )
};

export default SmallPinkButton;