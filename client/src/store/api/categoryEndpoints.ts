import api from './index';

export const categoryEndpoints = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getCategoryList: builder.query({
      query: (id: any) => `/category/list`,
    }),
  }),
});

export const { useGetCategoryListQuery } = categoryEndpoints;
