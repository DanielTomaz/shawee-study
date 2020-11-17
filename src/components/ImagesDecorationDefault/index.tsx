import React from 'react';

import {
  ImageDecoration,
} from './styles';

export interface IImageDecorationDefaultProps{
  url: string,
};

const ImageDecorationDefault: React.FC<IImageDecorationDefaultProps> = (props) => {
  return(
    <ImageDecoration src={props.url}/>
  )
};

export default ImageDecorationDefault;