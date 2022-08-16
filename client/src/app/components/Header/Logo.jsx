import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from './assets/logoCircle.svg';

const Logo = () => {
  return (
    <LogoWrapper to='/'>
      <SvgWrapper>
        <LogoIcon />
      </SvgWrapper>
      <NavigationTitle>Dark Souls Wikipedia</NavigationTitle>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled(Link)`
  font-family: 'Optimus Princeps SemiBold';
  text-decoration: none;
  justify-content: center;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const SvgWrapper = styled.section`
  border-radius: 50%;
  filter: invert(76%) sepia(66%) saturate(819%) hue-rotate(341deg)
    brightness(100%) contrast(91%);
  border: 3px solid black;

  &:hover {
    filter: none;
    background-color: #f2b524;
    border: 3px solid #f2b524;
  }
`;

const NavigationTitle = styled.h1`
  word-break: break-word;
  color: #f2b524;
  max-width: 165px;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;
