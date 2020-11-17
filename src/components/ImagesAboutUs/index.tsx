import React from 'react';

import {
  ContainerInnerImageText,
  ImageAboutUs,
  TextImages,
} from './styles';

export interface IImagesAboutUs{
  image: string,
  text: string,
};

const ImagesAboutUs: React.FC<IImagesAboutUs> = (props) => {
  return(
    <ContainerInnerImageText>
          <ImageAboutUs src={props.image}/>
          <TextImages>{props.text}</TextImages>
    </ContainerInnerImageText>
  )
};

export default ImagesAboutUs;