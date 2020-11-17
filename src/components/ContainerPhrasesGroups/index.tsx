import React from 'react';

import {
  ContainerPhrases,
  PhrasesGroups,
  GroupAuthorPhrases,
} from './styles';

export interface IContainerPhrasesGroups{
  phrases: string,
  author: string,
};

const ContainerPhrasesGroups: React.FC<IContainerPhrasesGroups> = (props) => {
  return(
    <ContainerPhrases>
      <PhrasesGroups>
        {props.phrases}
      </PhrasesGroups>
      <GroupAuthorPhrases>
        {props.author}
      </GroupAuthorPhrases>
    </ContainerPhrases>
  )
};

export default ContainerPhrasesGroups;