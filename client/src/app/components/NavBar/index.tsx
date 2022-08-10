import styled from 'styled-components/macro';
import Buttons from './Buttons';
import CategoryList from './CategoryList';
import Logo from './Logo';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Logo />
      <Buttons />
      <CategoryList />
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  opacity: 90%;
  background-color: ${(p) => p.theme.secondary};

  @media only screen and (max-width: 1500px) {
    grid-area: nav;
    width: min-content;
    align-items: normal;
  }

  @media only screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
  }
`;
