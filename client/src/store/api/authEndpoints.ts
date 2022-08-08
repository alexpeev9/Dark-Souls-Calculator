import api from './index';

export const authEndpoint = api.injectEndpoints({
  endpoints: (builder: any) => ({
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
    login: builder.mutation({
      query: (credentials: any) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials: any) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authEndpoint;
