import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: localStorage.getItem('username'),
    isAdmin: localStorage.getItem('isAdmin'),
  },
  reducers: {
    setCredentials: (state: any, action: any) => {
      const { username, isAdmin } = action.payload;
      state.username = username;
      state.isAdmin = isAdmin;
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', isAdmin);
    },
    logOut: (state: any, action: any) => {
      state.username = null;
      state.isAdmin = null;

      localStorage.removeItem('username');
      localStorage.removeItem('isAdmin');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUsername = (state: any) => state.auth.username;
export const selectCurrentIsAdmin = (state: any) => state.auth.isAdmin;
