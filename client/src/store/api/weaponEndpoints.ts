import api from './index';

export const weaponEndpoints = api.injectEndpoints({
  endpoints: (builder: any) => ({
    searchAllWeapons: builder.mutation({
      query: (searchData: any) => ({
        url: '/weapon/search',
        method: 'POST',
        body: searchData,
      }),
    }),
    getWeaponsByCategory: builder.query({
      query: (customId: any) => `/weapon/${customId}`,
    }),
    getWeaponDetails: builder.query({
      query: ({ categoryName, weaponName }: any) =>
        `/weapon/${categoryName}/${weaponName}`,
    }),
  }),
});

export const {
  useSearchAllWeaponsMutation,
  useGetWeaponsByCategoryQuery,
  useGetWeaponDetailsQuery,
} = weaponEndpoints;
