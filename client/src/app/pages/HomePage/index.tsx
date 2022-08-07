import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Dark Souls Calculator' />
      </Helmet>
      <HomePageWrapper>HomePage</HomePageWrapper>
    </>
  );
};

export default HomePage;

const HomePageWrapper = styled.h1`
  color: ${(p) => p.theme.primary};
`;
