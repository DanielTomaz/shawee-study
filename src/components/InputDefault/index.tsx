import React from 'react';

import{
  Input,
} from './styles';

export interface IInputDefaultProps{
  placeholderInput: string,
};

const InputDefault: React.FC<IInputDefaultProps> = (props) => {
  return(
    <Input placeholder={props.placeholderInput}/>
  )
};

export default InputDefault;