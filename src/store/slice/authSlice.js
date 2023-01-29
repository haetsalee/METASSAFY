import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from '../action/authAction';

const initialState = {
  data: null,
  status: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logoutSlice(state) {
      state.data = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state = { ...action.payload };
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state = { ...action.payload };
    });
  },
});

export const { loginSlice, logoutSlice } = authSlice.actions;

export default authSlice;
