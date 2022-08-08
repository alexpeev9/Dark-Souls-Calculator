import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('Access-Control-Allow-Origin', 'http://localhost:5000');
    //   return headers;
    // },
  }),
  tagTypes: ['Category', 'Weapon'],
  endpoints: (builder) => ({}),
});

export default api;
