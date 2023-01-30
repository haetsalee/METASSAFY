import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLogin, fetchRegister } from '../../services/auth-service';

export const loginAction = createAsyncThunk(
  'auth/login',
  async (
    { userIdValue: id, userPasswordValue: password },
    { rejectWithValue }
  ) => {
    try {
      const { data, status, error } = await fetchLogin({ id, password });
      return { data, status, error };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const registerAction = createAsyncThunk(
  'auth/register',
  async (
    { userIdValue: id, userPasswordValue: password },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchRegister(id, password);
      console.log('회원가입 요청 후 액션', response);
      const { data, status, error } = response;
      return { data, status, error };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
