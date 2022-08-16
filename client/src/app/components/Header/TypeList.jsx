import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useGetTypesQuery, selectTypeIds } from '../../../api/typeApi';
import TypeDetails from './TypeDetails';
import Spinner from '../Spinner';

const TypeList = () => {
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[1];

  const { isLoading, isSuccess, isError, error } = useGetTypesQuery();
  const typeIds = useSelector(selectTypeIds);
  let content;
  if (isLoading) {
    content = <Spinner width='15rem' height='10rem' color='#414855' />;
  } else if (isSuccess) {
    content = typeIds.map((typeId, i) => (
      <TypeDetails id={typeId} key={i} pathName={pathName} />
    ));
  } else if (isError) {
    content = (
      <Spinner width='10rem' height='10rem' color='#414855' error={error} />
    );
  }

  return (
    <TypesWrapper>
      <SideTitle>Weapon Types</SideTitle>
      {content}
    </TypesWrapper>
  );
};

export default TypeList;

const SideTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-decoration: underline;
`;

const TypesWrapper = styled.section`
  ::-webkit-scrollbar {
    width: 2rem;
    border: solid #414855;
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: #414855;
    border: 0.2rem solid #f2b524;
    border-radius: 1rem;
  }

  overflow: auto;
  margin: 0.7rem 0.7rem 0.7rem 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background-color: #f2b524;

  @media only screen and (max-width: 900px) {
    height: 13.1rem;
    margin: 0rem;
    padding: 1rem 0rem;
    border-radius: 1rem 1rem 0 0;
  }
`;
