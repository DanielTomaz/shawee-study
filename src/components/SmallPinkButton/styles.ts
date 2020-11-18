import styled from 'styled-components';

//Botão rosa médio
export const ButtonPinkSmall = styled.button`
  height: 60px;
  width: 250px;
  background-color: var(--container-hackatons);
  font-size: 18px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 3% auto 5%;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  :hover{
    opacity: 85%;
  }

  :focus{
    outline: 0;
  }
`;