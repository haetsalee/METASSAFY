import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from '../action/authAction';

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
      return state;
    });
    builder.addCase(registerAction.pending, (state, action) => {
      state = { ...action.payload };
      console.log(state, 'pending');
      return state;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      console.log(action);
      state = { ...action.payload };
      console.log(state, 'fulfilled');
      return state;
    });
  },
});

export const { loginSlice, logoutSlice } = authSlice.actions;

export default authSlice;
