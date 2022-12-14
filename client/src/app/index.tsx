import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import NavBar from './components/NavBar';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AboutPage from './pages/commons/AboutPage';

import HomePage from './pages/commons/HomePage';
import NotFoundPage from './pages/commons/NotFoundPage';
import WeaponDetailsPage from './pages/weapons/WeaponDetailsPage';
import WeaponListPage from './pages/weapons/WeaponListPage';

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
        <Route path='/about' element={<AboutPage />} />

        <Route path=':categoryName' element={<WeaponListPage />}>
          <Route path=':weaponName' element={<WeaponDetailsPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
