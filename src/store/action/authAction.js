import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLogin, fetchRegister } from '../../services/auth-service';
import { setCookie } from '../../utils/cookie';

export const loginAction = createAsyncThunk(
  'auth/login',
  async (
    { userIdValue: id, userPasswordValue: password },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchLogin(id, password);
      console.log('로그인 요청 후 액션', response);
      const { data, status, error } = response;
      setCookie('auth', data);
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
      setCookie('auth', data);
      return { data, status, error };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
