import styled from 'styled-components';
import H2 from '../../../components/elements/H2';

const WeaponImage = ({ category }: any) => {
  let image;
  try {
    image = require(`../../../../assets/images/weapons/${category.imageUrl}`);
  } catch (err) {
    image = require(`../../../../assets/images/weapons/not_found.png`);
  }
  return (
    <ImageSection>
      <ImageElement
        src={image}
        alt={category.name}
        onError={(event: any) => (event.target.style.display = 'none')}
      />
      <H2>{category.name}</H2>
    </ImageSection>
  );
};

export default WeaponImage;

const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  @media only screen and (max-width: 700px) {
    padding-bottom: 1.5rem;
  }

  ${H2} {
    margin-bottom: 0;
  }
`;

const ImageElement = styled.img`
  width: 7rem;
  height: 7rem;
  background-color: ${(p) => p.theme.secondary};
  border: 0.3rem solid ${(p) => p.theme.primary};

  border-radius: 1rem;

  &:hover {
    background-color: ${(p) => p.theme.primary};
    border: 0.3rem solid ${(p) => p.theme.secondary};
  }
`;
