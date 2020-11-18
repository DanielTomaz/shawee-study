import React from 'react';

import {
  ButtonHeader,
} from './styles';

export interface IHeaderProps{
  textButton: string,
  route: string,
}

const HeaderDefault: React.FC<IHeaderProps> = (props) =>{
  return(
    <ButtonHeader to={props.route} smooth={true} duration={1000}>
      {props.textButton}
    </ButtonHeader>
  )
};

export default HeaderDefault;