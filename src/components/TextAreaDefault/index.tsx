import React from 'react';
import { isPropertySignature } from 'typescript';

import {
  TextArea,
} from './styles';

export interface ITextAreaDefault{
  placeholderTextArea: string,
}

const TextAreaDefault: React.FC<ITextAreaDefault> = (props) => {
  return(
    <TextArea rows={5} placeholder={props.placeholderTextArea}/>
  )
};

export default TextAreaDefault;