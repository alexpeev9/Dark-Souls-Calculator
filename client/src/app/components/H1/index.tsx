import styled from 'styled-components/macro';
import { StyleConstants } from '../../../assets/styles/StyleConstants';

const H1 = styled.h1`
  font-size: 2.5rem;
  margin: 1.5rem 0 0.5rem 0;
  word-break: break-word;
  color: ${(p) => p.theme.primary};

  font-family: ${StyleConstants.FONT_TITLE};
  text-align: center;
  color: ${(p) => p.theme.primary};
`;
export default H1;
