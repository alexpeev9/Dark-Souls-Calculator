import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sortWeapons } from '../../../../../store/slices/filteredWeaponsSlice';
import P from '../../../../components/elements/P';

const TableHeader = ({ requirement, shortName, sortedCategory, icon }: any) => {
  const { isAscValue, requirementValue } = sortedCategory;

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

  const getClassActive =
    requirementValue === requirement ? 'active' : undefined;

  return (
    <ButtonElement onClick={onButtonClickSort} className={getClassActive}>
      {icon ? <ImageIcon src={icon} alt='Icon' /> : <></>}
      <P>{title}</P>
    </ButtonElement>
  );
};

export default TableHeader;

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
    color: ${(p) => p.theme.primary};
  }

  &.active {
    color: ${(p) => p.theme.primary};
  }

  ${P} {
    padding: 0;
    margin: 0;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const ImageIcon = styled.img`
  grid-area: img;
  width: 35px;
  height: 35px;
  padding-bottom: 0.2rem;
`;
