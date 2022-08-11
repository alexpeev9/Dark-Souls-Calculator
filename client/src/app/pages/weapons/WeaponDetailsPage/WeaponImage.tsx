import styled from 'styled-components/macro';

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
      <WeaponTitle>{category.name}</WeaponTitle>
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
`;

const ImageElement = styled.img`
  width: 10rem;
  height: 10rem;
  background-color: #414855;
  border: 0.3rem solid #f2b524;

  border-radius: 1rem;

  &:hover {
    background-color: #f2b524;
    border: 0.3rem solid #414855;
  }
`;

const WeaponTitle = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 3rem;

  @media only screen and (max-width: 1600px) {
    font-size: 2rem;
  }
`;
