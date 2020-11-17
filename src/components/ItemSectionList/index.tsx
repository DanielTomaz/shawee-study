import React from 'react';

import{
  ItemSectionListContainer,
  IconItemSectionList,
  TextItemSectionList,
} from './styles';

export interface IItemSectionListProps{
  icon: string,
  text: string,
}

const ItemSectionList: React.FC<IItemSectionListProps> = (props) => {
  return(
    <ItemSectionListContainer>
      <IconItemSectionList src={props.icon}/>
      <TextItemSectionList>{props.text}</TextItemSectionList>
    </ItemSectionListContainer>
  )
}

export default ItemSectionList;