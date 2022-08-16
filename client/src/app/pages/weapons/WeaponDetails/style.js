import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  width: 50%;
  background-color: #414855;
  font-family: 'Optimus Princeps';
  opacity: 90%;
  padding: 2rem 1.5rem 0rem 1.5rem;

  @media only screen and (max-width: 1500px) {
    width: 100%;
    height: 58vh;
    padding: 0;
  }
  @media only screen and (max-width: 900px) {
    width: auto;
    height: auto;
  }
`;

export const SecondTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

export const InfoWrapper = styled.section`
  margin: 1rem;
  padding: 1rem;
  background-color: #f2b524;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const InfoBox = styled.section`
  display: flex;

  /* align-items: center; */
`;

export const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
  padding: 0.2rem 0.5rem;
`;

export const TextParagraph = styled.p`
  margin: 0.3rem 0;
`;

export const TextParagraphLong = styled.p`
  width: 10rem;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 1200px) {
    width: auto;
  }
`;
export const RequirementsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  @media only screen and (max-width: 700px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const RequirementTitle = styled.h5`
  margin: 0.3rem 0;
`;

export const VerticalInfoBox = styled.section`
  padding: 0.5rem;
  color: #f2b524;
  background-color: #414855;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 3px solid #f2b524;
  border-inline-style: solid;
  border-radius: 20px;
`;
