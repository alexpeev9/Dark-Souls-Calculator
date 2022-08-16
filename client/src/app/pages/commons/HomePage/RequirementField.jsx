import styled from 'styled-components';
import { StrengthIcon } from '../../../../assets/images/icons/requirements';

const RequirementField = ({ name, requirement, onRequirementChange }) => {
  return (
    <>
      <RequirementWrapper>
        <ImageIcon src={StrengthIcon} alt='Strength Icon' />
        {name}:
        <InputElement
          type='number'
          onChange={onRequirementChange}
          value={requirement}
          required
          min='0'
          max='99'
        />
      </RequirementWrapper>
    </>
  );
};

export default RequirementField;

export const RequirementWrapper = styled.label`
  padding: 0.5rem;
  margin: 0 1rem 0.5rem 1rem;
  font-size: 2rem;
  background-color: #f2b524;
  text-align: left;
  font-size: 1.8rem;
  display: grid;
  column-gap: 0.5rem;
  align-items: center;
  grid-template-areas: 'img text' 'img input';
  border-radius: 0.7rem;
`;

const InputElement = styled.input`
  scrollbar-color: #f2b524;
  grid-area: input;
  font-size: 2.2rem;
  width: 12rem;
  text-align: center;
  background-color: #414855;
  color: #f2b524;
  border: none;

  &:focus {
    outline: none;
  }

  &:visited {
    outline: none;
  }
`;

const ImageIcon = styled.img`
  grid-area: img;
  width: 45px;
  height: 45px;
`;
