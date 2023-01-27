import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from '../../services/authApi';

export const loginAction = createAsyncThunk(
  'auth/login',
  async ({ userIdValue, userPasswordValue }, { rejectWithValue }) => {
    try {
      const response = await authApi.login(userIdValue, userPasswordValue);
      console.log('로그인 요청 후 액션', response.data, response);
      return response.headers;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
