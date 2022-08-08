import styled from 'styled-components/macro';
import { StyleConstants } from '../../../assets/styles/StyleConstants';

const ErrorMsg = styled.p`
  margin: 0;
  padding: 0;
  color: ${(p) => p.theme.primary};
  font-family: ${StyleConstants.FONT_OPTIMUS};
  text-align: center;
  word-break: break-word;
  font-size: 2rem;
  max-width: 13rem;
`;

export default ErrorMsg;
