import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate='%s - DS Calculator'
        defaultTitle='Dark Souls Calculator'
      >
        <meta name='description' content='A Dark Souls Calculator' />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
