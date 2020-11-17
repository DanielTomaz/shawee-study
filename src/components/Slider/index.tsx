import React from 'react';

import{
  SliderDefault,
  ContainerImagesSlider,
  ImagesSlider,
} from './styles';

const Slider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 1,
  };
  return(
    <SliderDefault {...settings}>
      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/1.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/2.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/3.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/4.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/5.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/6.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/7.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/8.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/9.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/10.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/11.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/12.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/13.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/14.png'/>
      </ContainerImagesSlider>

      <ContainerImagesSlider>
        <ImagesSlider src='https://shawee.io/wp-content/themes/shawee-2/img/confia/15.png'/>
      </ContainerImagesSlider>

    </SliderDefault>
  )
};

export default Slider;