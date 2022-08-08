import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import NavBar from './components/NavBar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

import HomePage from './pages/commons/HomePage';
import NotFoundPage from './pages/commons/NotFoundPage';

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
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
