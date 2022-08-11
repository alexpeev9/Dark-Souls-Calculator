import styled from 'styled-components/macro';
import { StyleConstants } from '../../../assets/styles/StyleConstants';
import errorHandler from '../../utils/errorHandler';

const ErrorBox = ({ error }: any) => {
  return (
    <ErrorWrapper>
      <ErrorParagraph>{errorHandler(error)}</ErrorParagraph>
    </ErrorWrapper>
  );
};

export default ErrorBox;

const ErrorWrapper = styled.span`
  opacity: 90%;
  padding: 1rem;
  font-family: ${StyleConstants.FONT_OPTIMUS};
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(p) => p.theme.primary};

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

const ErrorParagraph = styled.p`
  margin: 0;
  text-align: center;
  width: 20rem;
`;
