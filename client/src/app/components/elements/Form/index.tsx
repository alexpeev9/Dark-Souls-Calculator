import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme.secondary};
  border-radius: 1rem;
  padding: 1rem 0rem 1rem 0;
  height: max-content;

  @media only screen and (max-width: 1600px) {
    width: max-content;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 2rem;
      border: solid ${(p) => p.theme.primary};
      border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
      border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 5rem;
      background-color: ${(p) => p.theme.primary};
      border: 0.2rem solid ${(p) => p.theme.secondary};
      border-radius: 1rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-areas: 'button button';
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: normal;
  }
`;

export default Form;
