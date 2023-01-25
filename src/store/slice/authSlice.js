import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  user_id: null,
  user_pw: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.user_id = action.payload.user_id;
      state.user_pw = action.payload.user_pw;
    },
    logoutAccount(state) {
      state.isLogged = false;
      state.user_id = null;
      state.user_pw = null;
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;

export default authSlice;
