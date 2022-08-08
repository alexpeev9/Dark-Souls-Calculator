import { configureStore } from '@reduxjs/toolkit';

import api from './api';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true, // process.env.NODE_ENV !== 'production',
});

export default store;
