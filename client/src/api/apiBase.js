import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    withCredentials: true,
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('Access-Control-Allow-Origin', 'http://localhost:5000');
    //   return headers;
    // },
  }),
  tagTypes: ['Type', 'Weapon'],
  endpoints: (builder) => ({}),
});
