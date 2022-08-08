import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LogoCircle } from '../../../assets/images/common';
import H1 from '../H1';

const Logo = () => {
  return (
    <LogoWrapper to='/'>
      <ImageWrapper src={LogoCircle} alt='Warrior Logo' />
      <H1>Dark Souls Calculator</H1>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled(Link)`
  width: 16rem;
  justify-content: center;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.img`
  width: 9.4rem;
  height: 9.4rem;
  border-radius: 50%;
  padding: 0.3rem 0.3rem 0.7rem 0.7rem;
  filter: invert(76%) sepia(66%) saturate(819%) hue-rotate(341deg)
    brightness(100%) contrast(91%);
  border: 0.15rem solid black;

  &:hover {
    filter: none;
    background-color: ${(p) => p.theme.primary};
    border: 0.15rem solid ${(p) => p.theme.primary};
  }
`;
