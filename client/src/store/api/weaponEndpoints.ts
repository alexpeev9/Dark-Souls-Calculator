import api from './index';

export const weaponEndpoints = api.injectEndpoints({
  endpoints: (builder: any) => ({
    searchWeapons: builder.mutation({
      query: (searchData: any) => ({
        url: '/weapon/search',
        method: 'POST',
        body: searchData,
      }),
    }),
  }),
});

export const { useSearchWeaponsMutation } = weaponEndpoints;
