import React from 'react';
import styled from 'styled-components';

import useInput from '../../hooks/use-input';
import AuthInput from './AuthInput';
import SubmitButtons from './SubmitButtons';

const StyledHr = styled.hr`
  border: 0;
  border-bottom: 1.5px dashed #eee;
`;

const isNotEmpty = (value) => value.trim() !== '';

const LoginForm = (props) => {
  const {
    value: userId,
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

    console.log('제출!', userId, userPasswordValue);

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
          value={userId}
          onChange={userIdChangeHandler}
          onBlur={userIdBlurHandler}
          hasError={userIdHasError}
        />
        <AuthInput
          label="비밀번호"
          type="text"
          id="userPassword"
          placeholder="비밀번호 입력"
          value={userPasswordValue}
          onChange={userPasswordChangeHandler}
          onBlur={userPasswordBlurHandler}
          hasError={userPasswordHasError}
        />
      </div>
      <SubmitButtons />
      <StyledHr />
    </form>
  );
};

export default LoginForm;
