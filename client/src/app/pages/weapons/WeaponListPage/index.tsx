import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useGetWeaponsByCategoryQuery } from '../../../../store/api/weaponEndpoints';
import Buttons from './Buttons';

const WeaponListPage = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');
  const selectedCategory = pathArray[1] || undefined;
  const selectWeapon = pathArray[2];

  const { data, isLoading, isSuccess, isError, error }: any =
    useGetWeaponsByCategoryQuery(selectedCategory);

  let content;

  if (isLoading) {
    content = <CategoryDetails>...Loading</CategoryDetails>;
  } else if (isSuccess) {
    content = (
      <CategoryDetails>
        <FilteredTitle>{data?.name}:</FilteredTitle>
        <Buttons weapons={data?.weapons} selectWeapon={selectWeapon} />
      </CategoryDetails>
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

export default WeaponListPage;

const ResultWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CategoryDetails = styled.article`
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
