import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';

import HomePage from './pages/commons/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ErrorPage from './pages/commons/ErrorPage';
import TypeEditPage from './pages/types/TypeEditPage';
import TypeCreatePage from './pages/types/TypeCreatePage';
import TypeDetailsPage from './pages/types/TypeDetailsPage';
import WeaponDetails from './pages/weapons/WeaponDetails';
import { SideWrapper, GlobalStyle, FontStyles } from './style';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FontStyles />
      <SideWrapper>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create' element={<TypeCreatePage />} />
          <Route path='/edit/:typename' element={<TypeEditPage />} />
          <Route path=':typename' element={<TypeDetailsPage />}>
            <Route path=':weaponname' element={<WeaponDetails />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </SideWrapper>
    </BrowserRouter>
  );
};

export default App;
