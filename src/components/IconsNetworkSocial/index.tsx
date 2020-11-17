import React from 'react';

import {
  Icons,
} from './styles';

export interface IIconsNetworkSocial{
  icon: string,
};

const IconsNetworkSocial: React.FC<IIconsNetworkSocial> = (props) => {
  return(
    <Icons src={props.icon}/>
  )
};

export default IconsNetworkSocial;