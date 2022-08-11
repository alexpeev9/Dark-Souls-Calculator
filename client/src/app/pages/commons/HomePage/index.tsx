import { Helmet } from 'react-helmet-async';

import Calculator from './Calculator';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to Dark Souls Calculator!' />
      </Helmet>
      <Calculator />
    </>
  );
};

export default HomePage;
