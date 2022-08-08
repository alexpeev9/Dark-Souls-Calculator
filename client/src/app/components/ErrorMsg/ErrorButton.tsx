import styled from 'styled-components/macro';
import { StyleConstants } from '../../../assets/styles/StyleConstants';

const ErrorButton = styled.p`
  border-radius: 0.6rem;
  font-size: 1.8rem;
  font-family: ${StyleConstants.FONT_TITLE};
  background-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.text};
  border: 0.3rem solid ${(p) => p.theme.primary};

  &:hover {
    cursor: wait;
    background-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
    border: 0.3rem solid ${(p) => p.theme.primary};
  }

  -webkit-animation: wave-text 1s ease-in-out infinite;
  animation: wave-text 1s ease-in-out infinite;

  @keyframes wave-text {
    00% {
      transform: translateY(0rem);
    }
    50% {
      transform: translateX(-1rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }
`;

export default ErrorButton;
