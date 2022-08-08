import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to Dark Souls Calculator!' />
      </Helmet>
      {/* <HomePageWrapper></HomePageWrapper> */}
    </>
  );
};

export default HomePage;

// const HomePageWrapper = styled.h2`
//   color: ${(p) => p.theme.primary};
// `;
