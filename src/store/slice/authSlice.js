import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from '../action/authAction';

const initialState = {
  loading: false,
  userInfo: {},
  userAccessToken: null,
  userRefreshToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logoutAccount(state) {
      state.loading = false;
      state.userAccessToken = null;
      state.userRefreshToken = null;
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
      state.userAccessToken = payload['jwt-auth-token'];
      state.userRefreshToken = payload['jwt-refresh-token'];
    },
    [loginAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { loginAccount, logoutAccount } = authSlice.actions;

export default authSlice;
