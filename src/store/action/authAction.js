import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from '../../services/authApi';

export const loginAction = createAsyncThunk(
  'auth/login',
  async ({ id, password }, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(id, password);
      localStorage.setItem('userToken', data['jwt-auth-token']);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
