import { configureStore } from '@reduxjs/toolkit';

import { apiBase } from '../api/apiBase';
import authSlice from './authSlice';
import requirementsSlice from './requirementsSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    [apiBase.reducerPath]: apiBase.reducer,
    auth: authSlice,
    requirements: requirementsSlice,
    filteredTypes: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBase.middleware),
  devTools: true,
});
