import styled, { createGlobalStyle } from 'styled-components';

import { BackgroundImage } from '../assets/images';
import OptimusPrinceps from '../assets/fonts/OptimusPrinceps.ttf';
import OptimusPrincepsSemiBold from '../assets/fonts/OptimusPrincepsSemiBold.ttf';
import KELMSCOT from '../assets/fonts/KELMSCOT.TTF';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 1.5rem;
    background-image: URL(${BackgroundImage});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    @media only screen and (max-width: 2000px) {
      background-size: cover;
      background-position: right;
  }
  }
`;

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Optimus Princeps';
    src: URL(${OptimusPrinceps});
  }
  @font-face {
    font-family: 'Optimus Princeps SemiBold';
    src: URL(${OptimusPrincepsSemiBold});
  }
  @font-face {
    font-family: 'KELMSCOT';
    src: URL(${KELMSCOT});
  }
`;

export const SideWrapper = styled.section`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1500px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
