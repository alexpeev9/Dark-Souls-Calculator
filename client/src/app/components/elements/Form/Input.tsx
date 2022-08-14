import styled from 'styled-components/macro';

const Input = styled.input`
  scrollbar-color: ${(p) => p.theme.primary};
  font-family: 'Garamond';
  grid-area: input;
  font-size: 2.2rem;
  width: 12rem;
  text-align: center;
  background-color: ${(p) => p.theme.secondary};
  color: ${(p) => p.theme.primary};
  border: none;

  &:focus {
    outline: none;
  }

  &:visited {
    outline: none;
  }
  color-scheme: dark; // changes white background on autocomplete with current
`;

export default Input;
