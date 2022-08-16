import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useGetWeaponListQuery } from '../../../../api/weaponApi';
import WeaponList from './WeaponList';

const TypeDetailsPage = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');
  const selectType = pathArray[1];
  const selectWeapon = pathArray[2];

  const { data, isLoading, isSuccess, isError, error } =
    useGetWeaponListQuery(selectType);

  let content;

  if (isLoading) {
    content = <TypeDetails>...Loading</TypeDetails>;
  } else if (isSuccess) {
    content = (
      <TypeDetails>
        <FilteredTitle>{data?.name}:</FilteredTitle>
        <WeaponList weapons={data?.weapons} selectWeapon={selectWeapon} />
      </TypeDetails>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <ResultWrapper>
      {content}
      <Outlet />
    </ResultWrapper>
  );
};

export default TypeDetailsPage;

const ResultWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const TypeDetails = styled.article`
  align-items: center;
  height: 100vh;
  width: 17.3rem;
  display: flex;
  flex-direction: column;
  background-color: #f2b524;
  font-family: 'Optimus Princeps';
  opacity: 90%;
  padding: 0 1.5rem 0 1.5rem;

  @media only screen and (max-width: 1500px) {
    height: 42vh;
    width: 100%;
    padding: 0;
  }
`;

const FilteredTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 1rem 0;
  color: black;
  text-decoration: underline;
  @media only screen and (max-width: 900px) {
    background-color: #414855;
    color: black;
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    margin: 0;
  }
`;
