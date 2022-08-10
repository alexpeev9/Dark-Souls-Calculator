import styled from 'styled-components/macro';

import { NotFoundGif } from '../../../../assets/images/common';
import { StyleConstants } from '../../../../assets/styles/StyleConstants';
import H2 from '../../../components/H2';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <img src={NotFoundGif} alt='not-found' />
      <H2>The page you were looking for was not found.</H2>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;

const NotFoundWrapper = styled.article`
  background-color: ${(p) => p.theme.primary};
  opacity: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${H2} {
    width: 30rem;
  }

  @media only screen and (max-width: 900px) {
    justify-content: start;
    height: 100%;
  }
`;