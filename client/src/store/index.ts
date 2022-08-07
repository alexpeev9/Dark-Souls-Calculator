import { configureStore } from '@reduxjs/toolkit';

import api from './api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true, // process.env.NODE_ENV !== 'production',
});

export default store;
