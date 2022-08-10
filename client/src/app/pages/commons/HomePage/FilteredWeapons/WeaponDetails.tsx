import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

const WeaponDetails = ({ weapon, categoryId }: any) => {
  let image;
  try {
    image = require(`../../../../../assets/images/weapons/${weapon.imageUrl}`);
  } catch (err) {
    image = require(`../../../../../assets/images/weapons/not_found.png`);
  }
  return (
    <TableRowWrapper>
      <Link to={categoryId + '/' + weapon.id}>
        <ImageElement
          src={image}
          alt='img'
          onError={(event: any) => (event.target.style.display = 'none')}
        />
        <TableTitleText>{weapon.name}</TableTitleText>
      </Link>
      <TableData>{weapon.requirements.strength}</TableData>
      <TableData>{weapon.requirements.dexterity}</TableData>
      <TableData>{weapon.requirements.intelligence}</TableData>
      <TableData>{weapon.requirements.faith}</TableData>
    </TableRowWrapper>
  );
};

export default WeaponDetails;

const TableRowWrapper = styled.article`
  display: grid;
  padding: 0.2rem 0 0.2rem 0;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border: solid black;
  border-width: 0.1rem 0 0.1rem 0;
  border-inline-style: solid;

  &:first-child {
    border-width: 0 0 0.1rem 0;
  }

  &:last-child {
    border-width: 0.1rem 0 0 0;
  }

  @media only screen and (max-width: 450px) {
    min-width: 16rem;
  }
`;

const ImageElement = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Link = styled(ReactLink)`
  padding: 0.5rem 0 0.5rem 0;
  width: 8.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background-color: #414855;
    border-radius: 1rem;
  }
`;

const TableTitleText = styled.h5`
  padding-top: 0.3rem;
  margin: 0;
  text-align: center;
  width: 100%;
`;
const TableData = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
