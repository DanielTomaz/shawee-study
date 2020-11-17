import React from 'react';

import {
  ButtonHeader,
} from './styles';

export interface IHeaderProps{
  textButton: string;
}

const HeaderDefault: React.FC<IHeaderProps> = (props) =>{
  return(
    <ButtonHeader>
      {props.textButton}
    </ButtonHeader>
  )
};

export default HeaderDefault;