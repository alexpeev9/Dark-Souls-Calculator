import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #414855;
  border-radius: 1rem;
  padding: 1rem 0rem 1rem 0;
  height: max-content;

  @media only screen and (max-width: 1500px) {
    width: max-content;
    overflow: auto;

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
  }

  @media only screen and (max-width: 900px) {
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
