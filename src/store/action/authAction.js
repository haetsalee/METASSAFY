import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLogin, fetchRegister } from '../../services/auth-service';

export const loginAction = createAsyncThunk(
  'auth/login',
  async ({ userIdValue: id, userPasswordValue: password }) => {
    const { data, status, error } = await fetchLogin({ id, password });

    // 에러 발생했거나 로그인 실패한 경우
    if (error || data === 'FAIL') {
      console.log('fail');
      return { data, status, error: 'FAIL' };
    }
    console.log('suces');
    return { data, status, error };
  }
);

export const registerAction = createAsyncThunk(
  'auth/register',
  async ({
    userIdValue: id,
    userPasswordValue: password,
    userNameValue: name,
    userEmailValue: email,
    userStudentIdValue: studentId,
    generation,
    area,
  }) => {
    const response = await fetchRegister(
      id,
      password,
      name,
      email,
      studentId,
      generation,
      area
    );
    console.log('action', response);
    return response;
  }

  //   const { data, status, error } = await fetchRegister(
  //     id,
  //     password,
  //     name,
  //     email,
  //     studentId,
  //     generation,
  //     area
  //   );
  //   // 에러 발생했거나 로그인 실패한 경우
  //   if (error || data === 'FAIL') {
  //     console.log('fail');
  //     return { data, status, error: 'FAIL' };
  //   }
  //   console.log('suces');
  //   return { data, status, error };
  // }
);
