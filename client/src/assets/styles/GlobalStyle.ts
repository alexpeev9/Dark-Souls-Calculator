import { createGlobalStyle } from 'styled-components';
import { BackgroundImage } from '../images/common';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 1.5rem;
    background-image: URL(${BackgroundImage});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    display: flex;
    flex-direction: row;
    
    @media only screen and (max-width: 2000px) {
      background-size: cover;
      background-position: right;
    }

    @media only screen and (max-width: 1500px) {
      flex-direction: row;
    }

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
