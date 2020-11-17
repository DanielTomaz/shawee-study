import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html, body, #root {
     height: 100%;
   }

    *, button{
      font-family: 'Roboto', sans-serif;
    }

   :root {
     --primary: #000000;
     --secondary: #2a2e33;
     --tertiary: #eb2341;
     --text-shawee: #ec367c;
     --color-texts: #ffffff;
     --container-hackatons: #d12053;
     --container-gray: #4a4a49;
   }

`;