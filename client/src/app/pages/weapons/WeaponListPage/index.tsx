import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import { useGetWeaponsByCategoryQuery } from '../../../../store/api/weaponEndpoints';
import H2 from '../../../components/elements/H2';
import ErrorBox from '../../../components/ErrorMsg/ErrorBox';
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
    content = (
      <CategoryDetails>
        <H2>...Loading</H2>
      </CategoryDetails>
    );
  } else if (isSuccess) {
    content = (
      <CategoryDetails>
        <H2>{data?.name}:</H2>
        <Buttons weapons={data?.weapons} selectWeapon={selectWeapon} />
      </CategoryDetails>
    );
  } else if (isError) {
    content = <ErrorBox error={error} />;
  }

  return (
    <>
      <Helmet>
        <title>{data?.name}</title>
        <meta
          name='description'
          content='See the full list of weapons from that category!'
        />
      </Helmet>
      <ResultWrapper>
        {content}
        <Outlet />
      </ResultWrapper>
    </>
  );
};

export default WeaponListPage;

const ResultWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  opacity: 90%;

  @media only screen and (max-width: 1600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CategoryDetails = styled.main`
  align-items: center;
  height: 100vh;
  width: 17.3rem;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  font-family: 'Optimus Princeps';
  padding: 0 1.5rem 0 1.5rem;

  @media only screen and (max-width: 1600px) {
    height: 42vh;
    width: 100%;
    padding: 0;
  }

  ${H2} {
    @media only screen and (max-width: 1000px) {
      background-color: ${(p) => p.theme.secondary};
      border-radius: 1rem 1rem 0 0;
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      margin: 0;
    }
  }
`;
