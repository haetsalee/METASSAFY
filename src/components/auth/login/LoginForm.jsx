import React from 'react';

import useInput from '../../../hooks/use-input';
import AuthInput from '../AuthInput';
import SubmitButton from '../SubmitButton';

import { fetchLogin, fetchUserInfo } from '../../../services/auth-service';
import { setUserInfo } from '../../../utils/local-storage';

const isNotEmpty = (value) => value.trim() !== '';

const LoginForm = (props) => {
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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // 로그인 API
    const { data, status, error } = await fetchLogin({
      id: userIdValue,
      password: userPasswordValue,
    });

    // 로그인 성공 시 모달 닫기
    if (data === 'Success') {
      const { data, status } = await fetchUserInfo();
      setUserInfo(data);
      props.onClose();
    } else {
      resetuserId();
      resetuserPassword();
      alert('로그인 실패: 아이디와 비밀번호를 확인해주세요.');
    }
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
      </div>
      <SubmitButton>로그인하기</SubmitButton>
    </form>
  );
};

export default LoginForm;
