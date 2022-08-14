import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

import { useGetCategoryListQuery } from '../../../store/api/categoryEndpoints';
import errorHandler from '../../utils/errorHandler';
import ErrorMsg from '../ErrorMsg';
import Loading from '../Loading';

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
    content = <Loading>Loading...</Loading>;
  } else if (isSuccess) {
    content = categories.map((category: any, i: any) => (
      <LinkElement
        key={i}
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
      {/* <SideTitle>Weapon Categories</SideTitle> */}
      {content}
    </CategoriesWrapper>
  );
};

export default CategoryList;

const CategoriesWrapper = styled.section`
  ::-webkit-scrollbar {
    width: 2rem;
    border: solid ${(p) => p.theme.secondary};
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: ${(p) => p.theme.secondary};
    border: 0.2rem solid ${(p) => p.theme.primary};
    border-radius: 1rem;
  }

  overflow: auto;
  margin: 0.7rem 0.7rem 0.7rem 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.primary};

  @media only screen and (max-width: 1000px) {
    height: 13.1rem;
    margin: 0rem;
    padding: 1rem 0rem;
    border-radius: 1rem 1rem 0 0;
  }

  ${ErrorMsg} {
    color: ${(p) => p.theme.text};
  }
`;

// const SideTitle = styled.h1`
//   text-align: center;
//   font-size: 1.5rem;
//   margin: 0.5rem 0;
//   text-decoration: underline;
// `;

const LinkElement = styled(Link)`
  display: block;
  color: black;
  margin: 0.1rem;
  padding: 1rem;
  border-radius: 20px;
  text-decoration: none;
  &.active {
    background-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
  }
  &:hover:not(.active) {
    background-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
  }

  @media only screen and (max-width: 1000px) {
    text-align: center;
    width: 100%;
    margin: 0.1rem 0;
    padding: 1rem 0;
  }
`;
