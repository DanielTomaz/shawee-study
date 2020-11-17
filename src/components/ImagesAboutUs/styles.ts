import styled from 'styled-components';

//Container para colocar os items
export const ContainerInnerImageText =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 210px;
  margin: 0 5% 0 0;
  cursor: pointer;

  :last-child{
    margin-top: 2.5%;
  }
`;

//Imagens dos container internos do blog
export const ImageAboutUs = styled.img`
  height: 140px;
  width: 210px;
`;

//Texto abaixo das imagens do Container blog
export const TextImages = styled.text`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  text-align: left;
  padding: 8% 5% 0 0;
`;