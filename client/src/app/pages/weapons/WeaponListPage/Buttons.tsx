import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Buttons = ({ weapons, selectWeapon }: any) => {
  const getClassActive = (id: any) =>
    selectWeapon === id ? 'active' : undefined;

  const loadImage = (url: any) => {
    try {
      return require(`../../../../assets/images/weapons/${url}`);
    } catch (err) {
      return require(`../../../../assets/images/weapons/not_found.png`);
    }
  };

  return (
    <>
      <ButtonSection>
        {weapons.map((weapon: any, i: any) => (
          <ButtonElement
            key={i}
            to={weapon.customId}
            className={getClassActive(weapon.customId)}
          >
            <ImageElement src={loadImage(weapon.imageUrl)} alt={weapon.name} />
            <ElementTitle>{weapon.name}</ElementTitle>
          </ButtonElement>
        ))}
      </ButtonSection>
    </>
  );
};

export default Buttons;

const ButtonSection = styled.section`
  overflow: auto;
  margin: 0.7rem 0.7rem 0.7rem 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background-color: #414855;

  ::-webkit-scrollbar {
    width: 2rem;
    border: solid #f2b524;
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: #f2b524;
    border: 0.2rem solid #414855;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 1600px) {
    padding: 0;
    margin: 0 0 1rem 0;
    width: 94.4%;
  }

  @media only screen and (max-width: 1000px) {
    border-radius: 0;
    margin: 0rem;
    padding: 1rem 0rem;
    width: 100%;
  }
`;

const ButtonElement = styled(Link)`
  min-width: 15.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: 'Optimus Princeps';
  background-color: transparent;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.7rem 0;
  margin: 0.7rem 0;

  &:hover {
    cursor: pointer;
    background-color: #f2b524;
    color: black;
    border-radius: 1rem;
    text-decoration: underline;
  }

  &.active {
    cursor: pointer;
    background-color: #f2b524;
    color: black;
    text-decoration: underline;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 1600px) {
    width: 100%;
    padding: 0.2rem 0;
  }
`;

const ImageElement = styled.img`
  background-color: #f2b524;
  margin: 0 0.7rem;
  border-radius: 1rem;

  ${ButtonElement}:hover & {
    background-color: #414855;
  }

  ${ButtonElement}.active & {
    background-color: #414855;
  }
`;

const ElementTitle = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
`;
