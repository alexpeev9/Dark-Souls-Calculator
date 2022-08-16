import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sortWeapons } from '../../../../state/searchSlice';
import { StrengthIcon } from '../../../../assets/images/icons/requirements';

const WeaponTableHeader = ({ requirement, shortName, sortedType }) => {
  const { isAscValue, requirementValue } = sortedType;

  const dispatch = useDispatch();

  const onButtonClickSort = () => {
    dispatch(sortWeapons(requirement));
  };

  const title =
    requirementValue === requirement
      ? isAscValue
        ? shortName + ' \u21e7'
        : shortName + ' \u21e9'
      : shortName;

  const getClassActive = requirementValue === requirement ? 'active' : null;

  return (
    <ButtonElement onClick={onButtonClickSort} className={getClassActive}>
      <ImageIcon src={StrengthIcon} alt='Strength Icon' />
      {title}
    </ButtonElement>
  );
};

export default WeaponTableHeader;

const ButtonElement = styled.button`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Optimus Princeps';
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;

  &:hover {
    cursor: pointer;
    color: #f2b524;
  }

  &.active {
    color: #f2b524;
  }

  @media only screen and (max-width: 900px) {
    width: 9rem;
  }
`;

const ImageIcon = styled.img`
  grid-area: img;
  width: 35px;
  height: 35px;
  padding-bottom: 0.2rem;
`;
