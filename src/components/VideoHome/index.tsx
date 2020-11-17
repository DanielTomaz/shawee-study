import React from 'react';

import{
  
  VideoBackground,
  TitlePage,
  SourceVideo,
 
} from './styles';


const VideoHome: React.FC = () => {
  const videoSource = "https://shawee.io/wp-content/themes/shawee-2/video/video.mp4";
  return(

      <VideoBackground autoPlay loop muted>
        <TitlePage> SUA EMPRESA NO RADAR DOS TALENTOS DA TECNOLOGIA </TitlePage>
        <SourceVideo  src={videoSource} type="video/mp4"/>
      </VideoBackground>
    
  )
};

export default VideoHome;