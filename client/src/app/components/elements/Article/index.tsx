import styled from 'styled-components/macro';

const Article = styled.article`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default Article;
