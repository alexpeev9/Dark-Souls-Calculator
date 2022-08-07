import styled from 'styled-components';

import Logo from './Logo';
// import Buttons from './Buttons';
// import TypeList from './TypeList';

const NavBar = () => {
  return (
    <HeaderWrapper>
      <Logo />
      {/* <Buttons />
      <TypeList /> */}
    </HeaderWrapper>
  );
};

export default NavBar;

const HeaderWrapper = styled.header`
  align-items: center;
  height: 100vh;
  font-family: 'Optimus Princeps';
  background-color: #414855;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: auto;

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
