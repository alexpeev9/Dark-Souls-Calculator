import { createGlobalStyle } from 'styled-components';
import { BackgroundImage } from '../images/common';
import { StyleConstants } from './StyleConstants';

const GlobalStyle = createGlobalStyle`
  
  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  
  #root {
    width: 100wh;
    height: 100vh;
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

    @media only screen and (max-width: 1600px) {
      flex-direction: row;
    }

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      height: 100%;
    }
    @media only screen and (max-width: 1000px) {
      background-image: none;
      background-color: ${(p) => p.theme.primary};
    }
  }
  
  a {
    text-decoration: none;
    color: ${(p) => p.theme.text}
  }
`;

export default GlobalStyle;
