import React from 'react';
import { registerAction } from '../../../store/action/authAction';

import useInput from '../../../hooks/use-input';
import AuthInput from '../AuthInput';
import RegisterSelectorInfo from './RegisterSelectInfo';
import SubmitButton from '../SubmitButton';
import { useDispatch } from 'react-redux';

const isNotEmpty = (value) => value.trim() !== '';
const isSamePassword = (value, copy) => value.trim() === copy.trim();

const RegisterForm = (props) => {
  const dispatch = useDispatch();

  const {
    value: userIdValue,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
    reset: resetUserId,
  } = useInput(isNotEmpty);

  const {
    value: userPasswordValue,
    isValid: userPasswordValueIsValid,
    hasError: userPasswordHasError,
    valueChangeHandler: userPasswordChangeHandler,
    inputBlurHandler: userPasswordBlurHandler,
    reset: resetUserPassword,
  } = useInput(isNotEmpty);

  const {
    value: userRetryPasswordValue,
    isValid: userRetryPasswordValueIsValid,
    hasError: userRetryPasswordHasError,
    valueChangeHandler: userRetryPasswordChangeHandler,
    inputBlurHandler: userRetryPasswordBlurHandler,
    reset: resetUserRetryPassword,
  } = useInput(isSamePassword.bind(null, userPasswordValue));

  let formIsValid = false;
  if (
    userIdIsValid &&
    userPasswordValueIsValid &&
    userRetryPasswordValueIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // 로그인 API
    dispatch(registerAction({ userIdValue, userPasswordValue }));

    resetUserId();
    resetUserPassword();
    resetUserRetryPassword();
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
          errorText="필수 입력입니다."
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
          errorText="필수 입력입니다."
        />
        <AuthInput
          label="비밀번호 재확인"
          type="password"
          id="userRetryPassword"
          placeholder="비밀번호 입력"
          value={userRetryPasswordValue}
          onChange={userRetryPasswordChangeHandler}
          onBlur={userRetryPasswordBlurHandler}
          hasError={userRetryPasswordHasError}
          errorText="비밀번호가 일치하지 않습니다."
        />
        <RegisterSelectorInfo />
      </div>
      <SubmitButton>회원가입</SubmitButton>
    </form>
  );
};

export default RegisterForm;
