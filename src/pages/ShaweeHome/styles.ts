import styled from 'styled-components';
import Logo from '../../styles/assets/logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  width: 100vw;
`;

//Container que monta o header completo
export const ContainerHeader = styled.div`
  background-color: var(--primary);
  width: 100vw;
  height: 20%;
  display: flex;
  flex-direction: column;
`; 


//Container que ficará contida a logo e botão para escolha de linguagem
export const ContainerHerderTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: var(--primary);
  justify-content: space-between;
  border: 0;
  padding: 2% 10% 0 10%;
`;

//Logo da Shawee
export const LogoShawee = styled.img`
 // background-image: url(${Logo});
  height: 30px;
  width: 150px;
  border: 0;
`;

//Botão para escolher a linguagem do site
export const ButtonLanguage = styled.button`
  height: 40px;
  width: 40px;
  background-color: var(--tertiary);
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;

  :focus{
    outline: 0;
  }
`;

//Container que conterá todos os botões do header
export const ButtonsHeaderContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--primary);
  padding: 2% 10% 0 10%;
`;

//Este container irá conter tudo o que é sobre a empresa que está na home
export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
`;

//Este container terá o nome da empresa e o texto sobre ela em coluna
export const CoitainerAboutUsShawee = styled.div`
  display: flex;
  flex-direction: row;
`;

//Coitaner que ficará o título "A Shawee" e o texto.
export const ContainerShaweeAndTextShawee = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 10%;
  margin-right: 15%;
  width: 80%;
`;

//Título "A SHAWEE" e textos semelhantes
export const TitleShawee = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--text-shawee);
  padding: 0 0 5% 0;
`;  

//Texto de descrição sobre a Shawee
export const TextDescriptionShawee = styled.text`
  font-size: 18px;
  color: var(--color-texts);
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
`;

//Container do texto conectar
export const ContainerTextShaweeConection = styled.div`
  padding: 7% 10% 5% 0;
`;

//Texto h1
export const ShaweeTextConection = styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
`;

//Container hackatons
export const ContainerHackatonsDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--container-hackatons);
  padding: 5% 7% 5% 7%;
  align-items: center;
  margin: auto;
  position: relative;
  width: 80%
`;

//Title "O que são hackatons?"
export const TitleHackatonDesciption = styled.h3`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  padding: 0 0 3% 0;
`;

//Descrição dos hackatons
export const TextHackatonDesciption = styled.text`
  font-size: 18px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  padding: 0 0 3% 0;
  text-align: center;
`;

//Image do container hackaton
export const ImageHackatonDescription = styled.img`
  height: 40px;
  width: 200px;
`;

//Title contributions
export const TitleContributions = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--text-shawee);
  padding: 0 0 5% 0;
  padding: 5% 50% 0 10%;
`;  

//Container dos SquareButtons
export const ContainerSquareButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 26vw;
  margin: 3% 0% 0% 0%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

//Container de cada botão e descrição
export const ContainerSquareButtonsAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2% 0 2%;
  padding: 3% 0 3% 0;
  height: 400px;
`;

//Texto de descrição dos Square Buttons
export const TextDescriptionSquareButton = styled.text`
  font-size: 18px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  text-align: center;
  margin-top: 5%;
  padding: 10px 10px 10px 10px;
`;

//Container do Large Button
export const ContainerLargeButton = styled.div`
  padding: auto;
  background-color: '#ffffff';
  margin: auto;
`;

export const ContainerBenefitsTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 2% 4% 10%;
  width: 80%;
`;

//Texto sobre os benefícios
export const TextDescriptionBenefits = styled.text`
  font-size: 18px;
  color: var(--color-texts);
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  padding-top: 5%;
`;


//Figura benefícios
export const FigureBenefits =  styled.img`
  width: 80%;
  height: 85%;
`;

//Container da figura benefícios
export const ContainerFigureBenefits = styled.div`
  padding: 3% 0 0 0;
`;

//Figura de linhas
export const FigureLines = styled.img`
  width: 60%;
  height: 60%;
  margin: 1% auto 1%;
`;

//Container que ficará todos os containers de frases de grupos
export const ContainerDescriptionPhrasesGroups = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

//Botão rosa médio
export const ButtonPinkMedium = styled.button`
  height: 60px;
  width: 450px;
  background-color: var(--container-hackatons);
  font-size: 16px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 5% auto 5%;
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

//Container da imagens de decoração da página
export const ContainerImagesDecoration = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

//Container sobre o Hackaton
export const ContainerHackaton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

//Container do anúncio hackaton
export const ContainerHackatonAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 5% 5% 5% 10%;
  background-color: var(--container-gray);
`;

//Titulo "CONHEÇA O MAIOR HACKATHON ON-LINE DO BRASIL"
export const TitleHackatonAnnouncement = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: var(--color-texts);
  font-family: 'Roboto', sans-serif;
  padding: 3% 10% 3% 5%;
  text-align: left;
`;

//Texto sobre o hackaton
export const TextHackatonAnnouncement = styled.text`
font-size: 16px;
  font-weight: 300;
  color: var(--color-texts);
  font-family: 'Roboto', sans-serif;
  padding: 3% 10% 3% 5%;
`;

//Botão branco do container hackaton
export const ButtonWhite = styled.button`
  height: 50px;
  width: 400px;
  background-color: transparent;
  border: 1px solid var(--color-texts);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: var(--color-texts);
  font-family: 'Roboto', sans-serif;
  margin: 2% auto 5%;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;

  :hover{
    background-color: var(--color-texts);
    color: var(--secondary);
  }
`;

//Container mega hack
export const ContainerMegaHack = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 5% 5% 5% 5%;
  align-items: center;
`;

//Imagem mega hack
export const ImageMegaHack = styled.img`
  width: 180px;
  height: 100px;
  margin: 0 0 5% 0;
`;

//Coitaner que ficará o título "A Shawee" e o texto.
export const ContainerMegaHank = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 10%;
  width: 50%;
`;

//Image Mega Rank
export const ImageMegaRank = styled.img`
  max-width: 400px;
  margin-left: 10%;
`;

//Texto do mega rank
export const TextMegaRank = styled.text`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: var(--color-texts);
  padding: 2% 0 2% 0;
`;

//Container mega hack
export const ContainerMegaHankText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10% 10% 5% 5%;
`;

export const PinkButtonMegaRank = styled.button`
  height: 60px;
  width: 350px;
  background-color: var(--container-hackatons);
  font-size: 18px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 3% auto 3%;
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

//Container que ficará o título "A Shawee" e o texto.
export const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
  width: 100%;
`;

//Container blog
export const ContainerBlog = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5% 15% 5% 10%;
  background-color: var(--container-gray);
`;

//Container dos items do container blog
export const ContainerItemsBlog = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2% 0 2%;
`;

//Título no container blog
export const TitleBlog = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  padding: 15% 0 5% 0;
`;

//Botão rosa blog
export const ButtonPinkBlog = styled.button`
  height: 50px;
  width: 220px;
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

//Container plataform
export const ContainerPlataform = styled.div`
  display: flex;
  flex-direction: row;
`;
//Container com os textos sobre a plataforma
export const ContainerTextPlataform = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 3% 5% 10%;
  width: 50%
`;

//Botão rosa blog
export const ButtonPinkPlataform = styled.button`
  height: 50px;
  max-width: 350px;
  background-color: var(--container-hackatons);
  font-size: 18px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  border: 0;
  border-radius: 5px;
  margin-top: 5%;
  cursor: pointer;

  :hover{
    opacity: 85%;
  }

  :focus{
    outline: 0;
  }
`;

//Container sobre a plataforma que está contida a imagem
export const ContainerPlataformImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 10% 20% 10% 5%;
`;

//Imagem do container plataforma
export const ImagePlataform = styled.img`
  max-width: 400px;
`;

//Título no container o que falam de nós
export const TitleAboutUs = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--text-shawee);
  padding: 0 0 3% 10%;
`;  

//Container que ficará contida as imagens do que falam sobre a shawee
export const ContainerWhatTheSayAboutUsImage = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 70%;
  justify-content: left;
  padding-left: 10%;
`;

//Container do formulário Shawee
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

//Container que divide os dois lados do formulário
export const ContainerFormDivisorLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10% 5% 10%;
`;

//Título no container o que falam de nós
export const TitleContactShawee = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--text-shawee);
  padding: 0 40% 3% 0%;
`; 

//Botão receber newsletter
export const ButtonPinkContactShawee = styled.button`
  height: 50px;
  width: 220px;
  background-color: var(--container-hackatons);
  font-size: 18px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  border: 0;
  border-radius: 5px;
  margin: 0 0 50px 0;
  cursor: pointer;

  :hover{
    opacity: 85%;
  }

  :focus{
    outline: 0;
  }
`;

//Container com email e endereço da empresa
export const ContainerCompanyInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

//Icone de email
export const IconEmail = styled(HiOutlineMail)`
  width: 25px;
  height: 35px;
  color: var(--color-texts);
  margin-right: 2%;
`;

//Texto do email shawee: hi@shawee.io
export const TextEmail = styled.text`
  font-size: 16px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
`;

//Ícone de localização
export const IconLocation = styled(ImLocation)`
  width: 25px;
  height: 35px;
  color: var(--color-texts);
  margin-right: 2%;
`;

//Texto bold Cubo Itaú
export const TextLocationBold = styled.text`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: var(--color-texts);
  margin-top: 5px;
`;

//Container que ficará o texto de endereço
export const ContainerLocalization = styled.div`
  display: flex;
  flex-direction: column;
`;

//Container a direita do form
export const ContainerFormDivisorRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10% 5% 0;
`;

export const ButtonSend = styled.button`
  height: 50px;
  width: 100px;
  background-color: var(--container-hackatons);
  font-size: 18px;
  color: var(--color-texts);
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
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

//Barra final do site
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--primary);
  width: 100%;
  height: 40%;
  padding: 3% 10% 3% 10%;
  justify-content: space-between;
`;

//Container dos ícones na barra do final do site
export const ContainerIconsBottom = styled.div`
  display: flex;
  flex-direction: row;
`;
