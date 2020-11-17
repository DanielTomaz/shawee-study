import styled from 'styled-components';


export const ContainerPhrases = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: transparent;
  border: 1px solid var(--color-texts);
  height: 230px;
  justify-content: space-around;  
  margin: 0 5px 0 5px;
  padding: 0 1% 0 1%;
`;

export const PhrasesGroups = styled.text`
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: var(--color-texts);
  text-align: center;
  margin: 5% auto 5%;
  text-align: center;
`;

export const GroupAuthorPhrases = styled.text`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: var(--color-texts);
  text-align: center;
`;

