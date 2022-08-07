import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LogoCircle } from '../../../assets/images/common';

const Logo = () => {
  return (
    <LogoWrapper to='/'>
      <ImageWrapper>
        <Image src={LogoCircle} alt='test' />
      </ImageWrapper>
      <NavBarTitle>Dark Souls Calculator</NavBarTitle>
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

const ImageWrapper = styled.section`
  border-radius: 50%;
  padding: 0.3rem 0.3rem 0.7rem 0.7rem;
  filter: invert(76%) sepia(66%) saturate(819%) hue-rotate(341deg)
    brightness(100%) contrast(91%);
  border: 0.15rem solid black;

  &:hover {
    filter: none;
    background-color: #f2b524;
    border: 0.15rem solid #f2b524;
  }
`;

const NavBarTitle = styled.h1`
  word-break: break-word;
  color: #f2b524;
  max-width: 165px;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

const Image = styled.img`
  width: 9.4rem;
  height: 9.4rem;
`;
