import { configureStore } from '@reduxjs/toolkit';

import api from './api';
import authSlice from './slices/authSlice';
import filteredWeaponsSlice from './slices/filteredWeaponsSlice';
import requirementsSlice from './slices/requirementsSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    requirements: requirementsSlice,
    filteredWeapons: filteredWeaponsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true, // process.env.NODE_ENV !== 'production',
});

export default store;
