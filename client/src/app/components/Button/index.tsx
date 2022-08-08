import styled from 'styled-components/macro';
import { StyleConstants } from '../../../assets/styles/StyleConstants';

const Button = styled.button`
  border-radius: 0.6rem;
  font-size: 1.8rem;
  font-family: ${StyleConstants.FONT_TITLE};
  background-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.text};
  border: 0.3rem solid ${(p) => p.theme.primary};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
    border: 0.3rem solid ${(p) => p.theme.primary};
  }
`;

export default Button;
