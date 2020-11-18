import styled from 'styled-components';


export const ContainerVideoBackground = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const VideoBackground = styled.video`
  width: 100%;
  flex: 1;
  position: relative;
`;

export const TransparentContainer = styled.div`
  flex: 1;
  background-color: transparent;
  position: absolute;
  justify-content: center;
`;

//Título da página SUA EMPRESA NO RADAR DOS TALENTOS DA TECNOLOGIA
export const TitlePage = styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  text-align: center;
  z-index: 99;
`;

export const SourceVideo = styled.source`
`;

