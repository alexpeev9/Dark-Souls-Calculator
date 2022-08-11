import styled from 'styled-components/macro';
import errorHandler from '../../utils/errorHandler';

const ErrorMessage = ({ error }: any) => {
  return <ErrorParagraph>{errorHandler(error)}</ErrorParagraph>;
};

export default ErrorMessage;

const ErrorParagraph = styled.p`
  margin: 0;
  text-align: center;
  width: 20rem;
`;
