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
      if (data === 'FAIL') {
        console.log('FAIL');
        return { data, status, error: 'FAIL' };
      }
      console.log('action', data, status, error);
      return { data, status, error };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

export const registerAction = createAsyncThunk(
  'auth/register',
  async (
    {
      userIdValue: id,
      userPasswordValue: password,
      userNameValue: name,
      userEmailValue: email,
      userStudentIdValue: studentId,
      generation,
      area,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data, status, error } = await fetchRegister(
        id,
        password,
        name,
        email,
        studentId,
        generation,
        area
      );
      if (data === 'FAIL') {
        console.log('FAIL');
        return { data, status, error: 'FAIL' };
      }
      return { data, status, error };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
