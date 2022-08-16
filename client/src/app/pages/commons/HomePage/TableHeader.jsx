import styled from 'styled-components';
import { StrengthIcon } from '../../../../assets/images/icons/requirements';

const TableHeader = () => {
  return (
    <li>
      <ul>Name</ul>
      <ul>
        <IconElement src={StrengthIcon} alt='strength icon' />
        STR
      </ul>
      <ul>
        <IconElement src={StrengthIcon} alt='dex icon' />
        DEX
      </ul>
      <ul>
        <IconElement src={StrengthIcon} alt='int icon' />
        INT
      </ul>
      <ul>
        <IconElement src={StrengthIcon} alt='faith icon' />
        FAITH
      </ul>
    </li>
  );
};

export default TableHeader;

const IconElement = styled.img`
  width: 35px;
  height: 35px;
`;
