import styled from 'styled-components';

//Container para colocar os items
export const ContainerInnerImageText =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

//Imagens dos container internos do blog
export const ImageBlog = styled.img`
  height: 140px;
  width: 210px;
`;

//Texto abaixo das imagens do Container blog
export const TextImages = styled.text`
  font-size: 18px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  text-align: center;
  padding-top: 8%;
`;