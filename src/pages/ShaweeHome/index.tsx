import React from "react";
import HeaderDefault from "../../components/HeaderDefault";
import VideoHome from "../../components/VideoHome";
import SquareButton from "../../components/SquareButton";
import LargeButton from "../../components/LargeButton";
import ContainerPhrasesGroups from "../../components/ContainerPhrasesGroups";
import ImagesDecorationDefault from "../../components/ImagesDecorationDefault";
import ItemSectionList from "../../components/ItemSectionList";
import SmallPinkButton from "../../components/SmallPinkButton";
import Slider from "../../components/Slider";
import ImagesBlog from "../../components/ImagesBlog";
import ImagesAboutUs from "../../components/ImagesAboutUs";
import InputDefault from "../../components/InputDefault";
import TextAreaDefault from "../../components/TextAreaDefault";
import IconsNetworkSocial from "../../components/IconsNetworkSocial";

import {
  ContainerHome,
  ContainerHeader,
  ContainerHerderTop,
  LogoShawee,
  ButtonLanguage,
  ButtonsHeaderContainer,
  ContainerAboutUs,
  CoitainerAboutUsShawee,
  ContainerShaweeAndTextShawee,
  TitleShawee,
  TextDescriptionShawee,
  ContainerTextShaweeConection,
  ShaweeTextConection,
  ContainerHackatonsDescription,
  TitleHackatonDesciption,
  TextHackatonDesciption,
  ImageHackatonDescription,
  TitleContributions,
  ContainerSquareButtons,
  ContainerSquareButtonsAndDescription,
  TextDescriptionSquareButton,
  ContainerLargeButton,
  ContainerBenefitsTexts,
  TextDescriptionBenefits,
  ContainerFigureBenefits,
  FigureBenefits,
  FigureLines,
  ContainerDescriptionPhrasesGroups,
  ButtonPinkMedium,
  ContainerImagesDecoration,
  ContainerHackaton,
  ContainerHackatonAnnouncement,
  TitleHackatonAnnouncement,
  TextHackatonAnnouncement,
  ButtonWhite,
  ContainerMegaHack,
  ImageMegaHack,
  ContainerMegaHank,
  ImageMegaRank,
  ContainerMegaHankText,
  TextMegaRank,
  PinkButtonMegaRank,
  ContainerSlider,
  ContainerBlog,
  ContainerItemsBlog,
  TitleBlog,
  ButtonPinkBlog,
  ContainerPlataform,
  ContainerTextPlataform,
  ButtonPinkPlataform,
  ContainerPlataformImage,
  ImagePlataform,
  TitleAboutUs,
  ContainerWhatTheSayAboutUsImage,
  ContainerForm,
  ContainerFormDivisorLeft,
  TitleContactShawee,
  ButtonPinkContactShawee,
  ContainerCompanyInformation,
  IconEmail,
  IconLocation,
  TextEmail,
  TextLocationBold,
  ContainerLocalization,
  ContainerFormDivisorRight,
  ButtonSend,
  ContainerBottom,
  ContainerIconsBottom,
} from "./styles";
;


const ShaweeHome: React.FC = () => {
  return (
    <ContainerHome>
      <ContainerHeader>
        <ContainerHerderTop>
          <LogoShawee src="https://shawee.io/wp-content/themes/shawee-2/img/logo.png" />
          <ButtonLanguage>EN</ButtonLanguage>
        </ContainerHerderTop>

        <ButtonsHeaderContainer>
       
              <HeaderDefault route="about-us" textButton="SOBRE NÓS" />
              <HeaderDefault route="hackatons-benefits" textButton="BENEFÍCIOS DE UM HACKATON" />
              <HeaderDefault route="mega-hack" textButton="MEGA HACK" />
              <HeaderDefault route="mega-hank" textButton="MEGA HANK" />
              <HeaderDefault route="blog-container" textButton="BLOG" />
              <HeaderDefault route="container-contact" textButton="CONTATO" />
           
        
        </ButtonsHeaderContainer>
      </ContainerHeader>
      
        
        <VideoHome />
    

      <ContainerAboutUs id="about-us">
        <CoitainerAboutUsShawee>
          <ContainerShaweeAndTextShawee>
            <TitleShawee>A SHAWEE</TitleShawee>
            <TextDescriptionShawee>
              Mais do que gostar de hackathons, a nossa equipe é verdadeiramente
              apaixonada por isso. Nós queremos fazer desse tipo de evento algo
              cada vez mais democrático, disponível para pessoas de todo o
              Brasil. Com a nossa plataforma on-line, aplicamos a nossa
              metodologia e dinamismo para que as maratonas de programação
              fiquem mais acessíveis para todo mundo, profissionalizamos a
              gestão e cuidamos de todas as etapas envolvidas do início ao fim.
            </TextDescriptionShawee>
          </ContainerShaweeAndTextShawee>

          <ContainerTextShaweeConection>
            <ShaweeTextConection>
              CONECTAR PESSOAS, EMPRESAS E COMUNIDADES.
            </ShaweeTextConection>
          </ContainerTextShaweeConection>
        </CoitainerAboutUsShawee>

        <ContainerHackatonsDescription>
          <TitleHackatonDesciption>
            Mas o que são hackathons?
          </TitleHackatonDesciption>
          <TextHackatonDesciption>
            São uma oportunidade de aplicar conhecimentos e melhorar o seu
            contato profissional. Como isso acontece? Desenvolvendo e
            transformando ideias em soluções de verdade para o dia a dia das
            empresas. São eventos que movimentam todo o setor de tecnologia das
            empresas, buscando soluções por meio da tecnologia e inovação.
          </TextHackatonDesciption>
          <TextHackatonDesciption>
            É muito comum que os hackathons estejam mais voltados à programação,
            mas é a criatividade que se destaca aqui, podendo se relacionar
            também com a internet das coisas, robótica, entre outras áreas.
          </TextHackatonDesciption>
          <ImageHackatonDescription src="https://shawee.io/wp-content/themes/shawee-2/img/welovehackas.png" />
        </ContainerHackatonsDescription>
      </ContainerAboutUs>

      <TitleContributions>
        CONTRIBUÍMOS COM OS OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL DA ONU
      </TitleContributions>

      <ContainerSquareButtons>
        <ContainerSquareButtonsAndDescription>
          <SquareButton
            primary="primary"
            textNumber="1"
            textSquareButton="Erradicar a probreza"
            icon="https://shawee.io/wp-content/themes/shawee-2/img/contribuicao/1.png"
          />
          <TextDescriptionSquareButton>
            Com o acesso à tecnologia, a pobreza pode ser reduzida.
          </TextDescriptionSquareButton>
        </ContainerSquareButtonsAndDescription>

        <ContainerSquareButtonsAndDescription>
          <SquareButton
            secondary="secondary"
            textNumber="4"
            textSquareButton="Educação de qualidade"
            icon="https://shawee.io/wp-content/themes/shawee-2/img/contribuicao/2.png"
          />
          <TextDescriptionSquareButton>
            Educação tecnológica por meio das maratonas.
          </TextDescriptionSquareButton>
        </ContainerSquareButtonsAndDescription>

        <ContainerSquareButtonsAndDescription>
          <SquareButton
            tertiary="tertiary"
            textNumber="5"
            textSquareButton="Igualdade de gênero"
            icon="https://shawee.io/wp-content/themes/shawee-2/img/contribuicao/3.png"
          />
          <TextDescriptionSquareButton>
            Tornando a tecnologia um espaço para todos os gêneros.
          </TextDescriptionSquareButton>
        </ContainerSquareButtonsAndDescription>

        <ContainerSquareButtonsAndDescription>
          <SquareButton
            quaternary="quaternary"
            textNumber="8"
            textSquareButton="Empregos dignos e crescimento econômico"
            icon="https://shawee.io/wp-content/themes/shawee-2/img/contribuicao/4.png"
          />
          <TextDescriptionSquareButton>
            Criando oportunidades em grandes empresas.
          </TextDescriptionSquareButton>
        </ContainerSquareButtonsAndDescription>

        <ContainerSquareButtonsAndDescription>
          <SquareButton
            textNumber="10"
            textSquareButton="Redução das desigualdades"
            icon="https://shawee.io/wp-content/themes/shawee-2/img/contribuicao/5.png"
          />
          <TextDescriptionSquareButton>
            Oferecendo condições iguais para todos.
          </TextDescriptionSquareButton>
        </ContainerSquareButtonsAndDescription>
      </ContainerSquareButtons>

      <ContainerLargeButton>
        <LargeButton
          backgroundColor="primary"
          fontColor="primary"
          borderColor="primary"
          textButton="MAIS DE 40.000 PESSOAS IMPACTADAS NOS ÚLTIMOS 3 ANOS."
        />
      </ContainerLargeButton>

      <CoitainerAboutUsShawee id='hackatons-benefits'>
        <ContainerBenefitsTexts>
          <TitleShawee>BENEFÍCIOS DE UM HACKATHON</TitleShawee>
          <TextDescriptionBenefits>
            Hackathons são uma excelente maneira de descobrir, formar e reter
            talentos dentro da sua empresa. Eles ajudam os funcionários a
            perceber o seu potencial e entender o seu papel como algo
            fundamental.
          </TextDescriptionBenefits>
          <TextDescriptionBenefits>
            O resultado: uma percepção positiva da sua empresa, com mais
            motivação e conversas envolvendo tecnologia, criatividade e
            inovação.
          </TextDescriptionBenefits>
        </ContainerBenefitsTexts>

        <ContainerFigureBenefits>
          <FigureBenefits src="https://shawee.io/wp-content/themes/shawee-2/img/beneficios.png" />
        </ContainerFigureBenefits>
      </CoitainerAboutUsShawee>

      <ContainerLargeButton>
        <LargeButton textButton="POR QUE FALAR SOBRE EMPLOYER BRANDING PARA TECHS" />
      </ContainerLargeButton>

      <FigureLines src="https://shawee.io/wp-content/themes/shawee-2/img/porque-lines.png" />

      <ContainerDescriptionPhrasesGroups>
        <ContainerPhrasesGroups
          phrases="A reputação negativa de uma empresa pode custa pelo menos 10% a mais 
            por contratação."
          author="(Harvard Business Review)"
        />
        <ContainerPhrasesGroups
          phrases="O investimento em employer branding pode reduzir em 28% a rotatividade
            de colaboradores."
          author="(Office Vibe)            "
        />
        <ContainerPhrasesGroups
          phrases="86% dos profissionais de RH dizem que o recrutamento está se tornando, 
            cada vez mais, semelhante ao marketing.."
          author="(iCIMS)"
        />
        <ContainerPhrasesGroups
          phrases="80% dos gerentes de aquisição de talentos acreditam que o employer branding
            tenha um impacto significativo na contratação de grandes talentos"
          author="(LinkedIn)"
        />
        <ContainerPhrasesGroups
          phrases="49% dos empregadores acreditam que não possuem as ferramentas para aprimorar
            efetivamente o seu employer branding."
          author="(CareerArc)"
        />
      </ContainerDescriptionPhrasesGroups>

      <ButtonPinkMedium>
        Make your online hackathon with Shawee
      </ButtonPinkMedium>

      <ContainerImagesDecoration>
        <ImagesDecorationDefault url="https://shawee.io/wp-content/themes/shawee-2/img/fotos/1.jpg" />
        <ImagesDecorationDefault url="https://shawee.io/wp-content/themes/shawee-2/img/fotos/2.jpg" />
        <ImagesDecorationDefault url="https://shawee.io/wp-content/themes/shawee-2/img/fotos/3.jpg" />
      </ContainerImagesDecoration>

      <ContainerHackaton id='mega-hack'>
        <ContainerHackatonAnnouncement>
          <TitleHackatonAnnouncement>
            CONHEÇA O MAIOR HACKATHON ON-LINE DO BRASIL
          </TitleHackatonAnnouncement>

          <TextHackatonAnnouncement>
            Imagine reunir diversas marcas do Brasil e do exterior, cada uma com
            o seu próprio desafio, envolvendo milhares de participantes. Esse é
            o Mega Hack, o Monte Everest dos Hackathons.
          </TextHackatonAnnouncement>

          <TextHackatonAnnouncement>
            O evento ajuda a desenvolver novos conhecimentos e a criar novas
            conexões. É a chance de colocar suas habilidades em prática, fazer
            um networking gigantesco e transformar ideias em soluções.
          </TextHackatonAnnouncement>

          <TextHackatonAnnouncement>
            E o melhor de tudo, o seu trabalho é seu. A propriedade intelectual
            da solução que foi desenvolvida é do grupo que a criou. É uma
            premissa básica que a gente não abre mão.
          </TextHackatonAnnouncement>

          <ButtonWhite>The Hack Day Manifesto</ButtonWhite>
        </ContainerHackatonAnnouncement>

        <ContainerMegaHack>
          <ImageMegaHack src="https://shawee.io/wp-content/themes/shawee-2/img/megahack.png" />
          <ItemSectionList
            icon="https://shawee.io/wp-content/themes/shawee-2/img/megahack/1.png"
            text="Traga um desafio para a nossa maratona de programação."
          />
          <ItemSectionList
            icon="https://shawee.io/wp-content/themes/shawee-2/img/megahack/2.png"
            text="Entre em contato com profissionais das áreas de desenvolvimento, business, marketing e UX."
          />
          <ItemSectionList
            icon="https://shawee.io/wp-content/themes/shawee-2/img/megahack/3.png"
            text="Desperte o interesse dos talentos que entraram em contato com a sua empresa"
          />
          <ItemSectionList
            icon="https://shawee.io/wp-content/themes/shawee-2/img/megahack/4.png"
            text="Sua empresa vista por milhares de pessoas nas nossas redes sociais."
          />

          <SmallPinkButton text="Baixar o mídia kit" />
        </ContainerMegaHack>
      </ContainerHackaton>

      <ContainerHackaton>
        <ContainerMegaHank id="mega-hank">
          <TitleShawee>MEGA RANK</TitleShawee>
          <ImageMegaRank src="https://shawee.io/wp-content/themes/shawee-2/img/megarank.png" />
        </ContainerMegaHank>

        <ContainerMegaHankText>
          <TextMegaRank>
            Já pensou fazer parte de uma plataforma que reúne os melhores
            desenvolvedores do Brasil? O Mega Rank transforma a competição em
            uma ferramenta de engajamento em que os desenvolvedores podem testar
            e praticar os seus conhecimentos.
          </TextMegaRank>

          <TextMegaRank>
            Ele também lista os participantes dos hackathons conforme o seu
            desempenho e serve como uma vitrine para futuras oportunidades de
            trabalho em uma das empresas parceiras da Shawee. E pode acreditar,
            elas realmente se orientam por esse rank.
          </TextMegaRank>
        </ContainerMegaHankText>
      </ContainerHackaton>
      <PinkButtonMegaRank>Acessar o Mega Rank</PinkButtonMegaRank>

      <ContainerSlider>
        <TitleShawee>QUEM CONFIA NA SHAWEE</TitleShawee>

        <Slider />
      </ContainerSlider>

      <ContainerBlog id="blog-container">
        <ContainerItemsBlog>
          <TitleBlog>AS ÚLTIMAS DO NOSSO BLOG</TitleBlog>
          <ButtonPinkBlog>Acessar o blog</ButtonPinkBlog>
        </ContainerItemsBlog>

        <ContainerItemsBlog>
          <ImagesBlog
            image="https://shawee.io/wp-content/uploads/2020/11/gestao-da-inovacao.jpg"
            text="Como usar a Gestão da Inovação e manter sua empresa na vanguarda"
          />
        </ContainerItemsBlog>

        <ContainerItemsBlog>
          <ImagesBlog
            image="https://shawee.io/wp-content/uploads/2020/11/hackathon-2-scaled.jpg"
            text="Hackathon: o que é e como pode te ajudar a atrair talentos para sua empresa"
          />
        </ContainerItemsBlog>

        <ContainerItemsBlog>
          <ImagesBlog
            image="https://shawee.io/wp-content/uploads/2020/11/gestao-de-mudancas.jpg"
            text="Gestão de Mudanças: o que é e como começar a usar em seu negócio"
          />
        </ContainerItemsBlog>
      </ContainerBlog>

      <ContainerPlataform>
        <ContainerTextPlataform>
          <TitleShawee>
            USE A NOSSA PLATAFORMA DE GRAÇA NO SEU EVENTO
          </TitleShawee>
          <TextMegaRank>
            Precisa de uma ajuda para gerenciar o seu evento? A Shawee dá o
            suporte que a nossa comunidade precisa. Nós disponibilizamos a nossa
            plataforma de gestão de graça para ONGs, público universitário e
            comunidade techs. É só preencher o formulário para a nossa equipe
            entrar em contato com você.
          </TextMegaRank>
          <ButtonPinkPlataform>Conheça nossa plataforma</ButtonPinkPlataform>
        </ContainerTextPlataform>

        <ContainerPlataformImage>
          <ImagePlataform src="https://shawee.io/wp-content/themes/shawee-2/img/plataforma.png" />
        </ContainerPlataformImage>
      </ContainerPlataform>

      <TitleAboutUs>O QUE FALAM DE NÓS?</TitleAboutUs>

      <ContainerWhatTheSayAboutUsImage>
        <ImagesAboutUs
          image="https://shawee.io/wp-content/uploads/2020/05/shaweepeople.jpg"
          text="Exclusivo: Shawee leva competições de programação (e empregos) à internet"
        />
        <ImagesAboutUs
          image="https://shawee.io/wp-content/uploads/2020/05/pulser-hacker.jpg"
          text="Novo projeto da Shawee, Pulsar Hacker será lançado em evento de startups"
        />
        <ImagesAboutUs
          image="https://shawee.io/wp-content/uploads/2020/05/s%C3%B3cios_shawee.jpg"
          text="Shawee e a arte de ganhar dinheiro ajudando empresas a fazer hackathons e gerir os dados criados"
        />
      </ContainerWhatTheSayAboutUsImage>

      <ContainerForm id="container-contact">
        <ContainerFormDivisorLeft>
          <TitleContactShawee>QUER RECEBER NOVIDADES DA SHAWEE?</TitleContactShawee>
          <InputDefault placeholderInput='Email *'/>
          <ButtonPinkContactShawee>Receber newsletter</ButtonPinkContactShawee>
          <TitleShawee>VAMOS CONVERSAR?</TitleShawee>
          <ContainerCompanyInformation>
            <IconEmail />
            <TextEmail>hi@shawee.io</TextEmail>
          </ContainerCompanyInformation>

          <ContainerCompanyInformation>
            <IconLocation />
            <ContainerLocalization>
              <TextLocationBold>Cubo Itaú</TextLocationBold>
              <TextEmail>Alameda Vicente Pinzon, 54</TextEmail>
              <TextEmail>Vila Olímpia, São Paulo - SP</TextEmail>
            </ContainerLocalization>
          </ContainerCompanyInformation>
        </ContainerFormDivisorLeft>

        <ContainerFormDivisorRight>
          <TitleShawee>CONTRATE A SHAWEE</TitleShawee>
          <InputDefault placeholderInput='Nome *'/>
          <InputDefault placeholderInput='Email *'/>
          <InputDefault placeholderInput='Assunto *'/>
          <TextAreaDefault placeholderTextArea='Sua mensagem...'/>
          <ButtonSend>Enviar</ButtonSend>
        </ContainerFormDivisorRight>
      </ContainerForm>

      <ContainerBottom>
        <ContainerIconsBottom>
          <IconsNetworkSocial icon='https://shawee.io/wp-content/themes/shawee-2/img/facebook.jpg'/>
          <IconsNetworkSocial icon='https://shawee.io/wp-content/themes/shawee-2/img/instagram.jpg'/>
          <IconsNetworkSocial icon='https://shawee.io/wp-content/themes/shawee-2/img/linkedin.jpg'/>
          <IconsNetworkSocial icon='https://shawee.io/wp-content/themes/shawee-2/img/youtube.png'/>
        </ContainerIconsBottom>
        <LogoShawee src='https://shawee.io/wp-content/themes/shawee-2/img/logo.png'/>
      </ContainerBottom>
    </ContainerHome>
  )

};

export default ShaweeHome;
