import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/action/authAction';

import useInput from '../../hooks/use-input';
import AuthInput from './AuthInput';
import SubmitButton from './SubmitButton';

const isNotEmpty = (value) => value.trim() !== '';

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const {
    value: userIdValue,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
    reset: resetuserId,
  } = useInput(isNotEmpty);

  const {
    value: userPasswordValue,
    isValid: userPasswordValueIsValid,
    hasError: userPasswordHasError,
    valueChangeHandler: userPasswordChangeHandler,
    inputBlurHandler: userPasswordBlurHandler,
    reset: resetuserPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (userIdIsValid && userPasswordValueIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('제출!', userIdValue, userPasswordValue);
    dispatch(loginAction(userIdValue, userPasswordValue));

    resetuserId();
    resetuserPassword();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <AuthInput
          label="아이디"
          type="text"
          id="userId"
          placeholder="아이디 입력"
          value={userIdValue}
          onChange={userIdChangeHandler}
          onBlur={userIdBlurHandler}
          hasError={userIdHasError}
        />
        <AuthInput
          label="비밀번호"
          type="password"
          id="userPassword"
          placeholder="비밀번호 입력"
          value={userPasswordValue}
          onChange={userPasswordChangeHandler}
          onBlur={userPasswordBlurHandler}
          hasError={userPasswordHasError}
        />
      </div>
      <SubmitButton>로그인하기</SubmitButton>
    </form>
  );
};

export default LoginForm;
