import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_API_PROD_URL}/api`
    : `http://localhost:${process.env.REACT_APP_API_DEV_PORT}/api`;

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Content-Type', 'application/json');
    //   headers.set('Access-Control-Allow-Origin', 'http://localhost:5000');
    //   return headers;
    // },
  }),
  tagTypes: ['Category', 'Weapon', 'User'],
  endpoints: (builder) => ({}),
});

export default api;
