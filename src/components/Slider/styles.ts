import styled from 'styled-components';
import Slider  from 'react-slick';



export const SliderDefault = styled(Slider)`
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

export const ContainerImagesSlider = styled.div`
  position: relative;;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ImagesSlider = styled.img`
  width: auto;
  height: 47px;
  margin: 0 auto;
`;