import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from '../action/authAction';

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
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
  extraReducers: {
    [loginAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userToken = payload.userToken;
    },
    [loginAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;

export default authSlice;
