import { apiBase } from './apiBase';

export const weaponApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getWeaponList: builder.query({
      query: (id) => `/weapon/${id}`,
    }),
    getWeaponDetails: builder.query({
      query: ({ typename, weaponname }) => `/weapon/${typename}/${weaponname}`,
    }),
    searchWeapons: builder.mutation({
      query: (searchData) => ({
        url: '/weapon/search',
        method: 'POST',
        body: searchData,
      }),
    }),
  }),
});

export const {
  useGetWeaponListQuery,
  useGetWeaponDetailsQuery,
  useSearchWeaponsMutation,
} = weaponApi;
