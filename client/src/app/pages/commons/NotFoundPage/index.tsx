import styled from 'styled-components/macro';

import { NotFoundGif } from '../../../../assets/images/common';
import { StyleConstants } from '../../../../assets/styles/StyleConstants';

const NotFoundPage = () => {
  return (
    <div>
      <img src={NotFoundGif} alt='not-found' />
      <h1>test</h1>
      <NotFoundTitle>The page you were looking for is not found.</NotFoundTitle>
    </div>
  );
};

export default NotFoundPage;

const NotFoundTitle = styled.h2`
  font-family: ${StyleConstants.FONT_TITLE};
`;
