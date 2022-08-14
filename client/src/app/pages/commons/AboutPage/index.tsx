import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Article from '../../../components/elements/Article';
import H2 from '../../../components/elements/H2';
import P from '../../../components/elements/P';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name='description'
          content='Information about Dark Souls Calculator!'
        />
      </Helmet>
      <AboutWrapper>
        <Article>
          <H2>About</H2>
          <P>
            This was build as a testing ground for my next big projects. Thanks
            for stopping by!
          </P>
          <A
            href='https://www.linkedin.com/in/alexpeev9/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Author
          </A>
          <A
            href='https://github.com/alexpeev9/Dark-Souls-Calculator'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </A>
        </Article>
      </AboutWrapper>
    </>
  );
};

export default AboutPage;

const AboutWrapper = styled.div`
  width: min-content;
  align-items: center;
  height: 100vh;
  width: 18.5rem;
  font-family: 'Optimus Princeps SemiBold';
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  opacity: 90%;
  padding-top: 2rem;
  padding: 0 0.8rem;

  @media only screen and (max-width: 1000px) {
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const A = styled.a`
  padding: 1rem;
  background-color: ${(p) => p.theme.secondary};
  color: ${(p) => p.theme.primary};
  border: 0.5rem solid ${(p) => p.theme.primary};
  border-radius: 1rem;
  text-align: center;

  &:hover {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.secondary};
    border: 0.3rem solid ${(p) => p.theme.secondary};
  }

  @media only screen and (max-width: 1000px) {
    width: 10rem;
  }
`;
