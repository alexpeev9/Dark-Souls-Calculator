import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useGetTypesQuery, selectTypeIds } from '../../../api/typeApi';

const CategoryList = () => {
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[1];

  const { isLoading, isSuccess, isError, error } = useGetTypesQuery();
  const typeIds = useSelector(selectTypeIds);
  return <div>index</div>;
};

export default CategoryList;
