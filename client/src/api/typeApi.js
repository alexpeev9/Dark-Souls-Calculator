import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiBase } from './apiBase';

const typesAdapter = createEntityAdapter();

const initialState = typesAdapter.getInitialState();

export const typeApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getTypes: builder.query({
      query: () => '/weapon/list',
      transformResponse: (responseData) => {
        return typesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: 'Type', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'Type', id })),
      ],
    }),
    createType: builder.mutation({
      query: (initialType) => ({
        url: '/weapon/create',
        method: 'POST',
        body: initialType,
      }),
      invalidatesTags: [{ type: 'Type', id: 'LIST' }],
    }),
    updateType: builder.mutation({
      query: (initialType) => ({
        url: `/weapon/${initialType.id}`,
        method: 'PUT',
        body: initialType,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Type', id: arg.id }],
    }),
    deleteType: builder.mutation({
      query: ({ id }) => ({
        url: `/weapon/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Type', id: arg.id }],
    }),
  }),
});

export const {
  useGetTypesQuery,
  useCreateTypeMutation,
  useUpdateTypeMutation,
  useDeleteTypeMutation,
} = typeApi;

// returns the query result object
export const selectTypesResult = typeApi.endpoints.getTypes.select();

// Creates memoized selector
const selectTypesData = createSelector(
  selectTypesResult,
  (typesResult) => typesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTypes,
  selectById: selectTypeById,
  selectIds: selectTypeIds,
  // Pass in a selector that returns the types slice of state
} = typesAdapter.getSelectors(
  (state) => selectTypesData(state) ?? initialState
);
