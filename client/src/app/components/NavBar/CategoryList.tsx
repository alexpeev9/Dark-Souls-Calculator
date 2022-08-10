import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import { useGetCategoryListQuery } from '../../../store/api/categoryEndpoints';
import errorHandler from '../../utils/errorHandler';
import ErrorMsg from '../ErrorMsg';

const CategoryList = () => {
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[1];

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  }: any = useGetCategoryListQuery(null);
  const getClassActive = (id: any) => (pathName === id ? 'active' : undefined);
  let content;
  if (isLoading) {
    content = <ErrorMsg>Loading...</ErrorMsg>;
  } else if (isSuccess) {
    content = categories.map((category: any, i: any) => (
      <LinkElement
        to={`/${category?.customId}`}
        className={getClassActive(category.customId)}
      >
        {category.name}
      </LinkElement>
    ));
  } else if (isError) {
    content = <ErrorMsg>{errorHandler(error)}</ErrorMsg>;
  }

  return (
    <CategoriesWrapper>
      <SideTitle>Weapon Categories</SideTitle>
      {content}
    </CategoriesWrapper>
  );
};

export default CategoryList;

const SideTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-decoration: underline;
`;

const CategoriesWrapper = styled.section`
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

  ${ErrorMsg} {
    color: ${(p) => p.theme.text};
  }
`;

const LinkElement = styled(Link)`
  width: 9rem;
  display: block;
  color: black;
  margin: 0.1rem;
  padding: 1rem;
  border-radius: 20px;
  text-decoration: none;
  &.active {
    background-color: #414855;
    color: #f2b524;
  }
  &:hover:not(.active) {
    background-color: #414855;
    color: #f2b524;
  }

  @media only screen and (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 0.1rem 0;
    padding: 1rem 0;
  }
`;
