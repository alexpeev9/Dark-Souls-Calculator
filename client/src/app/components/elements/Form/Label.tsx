import styled from 'styled-components/macro';
import { StyleConstants } from '../../../../assets/styles/StyleConstants';

export const Label = styled.label`
  padding: 0.5rem;
  margin: 0 1rem 0.5rem 1rem;
  font-size: 2rem;
  background-color: ${(p) => p.theme.primary};
  font-family: ${StyleConstants.FONT_OPTIMUS};

  text-align: left;
  font-size: 1.8rem;
  display: grid;
  column-gap: 0.5rem;
  align-items: center;
  grid-template-areas: 'img text' 'img input';
  border-radius: 0.7rem;
`;
