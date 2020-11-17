import React from 'react';

import {
  ContainerInnerImageText,
  ImageBlog,
  TextImages,
} from './styles';

export interface IImagesBlog{
  image: string,
  text: string,
};

const ImagesBlog: React.FC<IImagesBlog> = (props) => {
  return(
    <ContainerInnerImageText>
          <ImageBlog src={props.image}/>
          <TextImages>{props.text}</TextImages>
    </ContainerInnerImageText>
  )
};

export default ImagesBlog;