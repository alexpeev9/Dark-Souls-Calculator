import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import api from './index';

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState();

export const categoryEndpoints = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getCategories: builder.query({
      query: () => '/weapon/list',
      transformResponse: (responseData: any) => {
        return categoriesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error: any, arg: any) => [
        { category: 'Category', id: 'LIST' },
        ...result.ids.map((id: any) => ({ category: 'Category', id })),
      ],
    }),
    // TODO: Ready to use, needs implementation
    createCategory: builder.mutation({
      query: (initialCategory: any) => ({
        url: '/weapon/create',
        method: 'POST',
        body: initialCategory,
      }),
      invalidatesTags: [{ category: 'Category', id: 'LIST' }],
    }),
    updateCategory: builder.mutation({
      query: (initialCategory: any) => ({
        url: `/weapon/${initialCategory.id}`,
        method: 'PUT',
        body: initialCategory,
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        { category: 'Category', id: arg.id },
      ],
    }),
    deleteCategory: builder.mutation({
      query: ({ id }: any) => ({
        url: `/weapon/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        { category: 'Category', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryEndpoints;

// returns the query result object
export const selectCategoriesResult =
  categoryEndpoints.endpoints.getCategories.select(skipToken); // TODO: test

// Creates memoized selector
const selectCategoriesData: any = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  // Pass in a selector that returns the categories slice of state
} = categoriesAdapter.getSelectors(
  (state) => selectCategoriesData(state) ?? initialState
);
