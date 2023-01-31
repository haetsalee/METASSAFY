import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerAction } from '../../../store/action/authAction';

import useInput from '../../../hooks/use-input';
import AuthInput from '../AuthInput';
import ExistCheckButton from './ExistCheckButton';
import RegisterSelectorInfo from './RegisterSelectInfo';
import SubmitButton from '../SubmitButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const isNotEmpty = (value) => value.trim() !== '';
const isSamePassword = (value, copy) =>
  value.trim() !== '' && value.trim() === copy.trim();
const isEmailType = (value) => value.trim() !== '' && value.includes('@');

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [generation, setGeneration] = useState('');
  const [area, setArea] = useState('');

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

  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(isNotEmpty);

  const {
    value: userEmailValue,
    isValid: userEmailValueIsValid,
    hasError: userEmailHasError,
    valueChangeHandler: userEmailChangeHandler,
    inputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput(isEmailType);

  const {
    value: userStudentIdValue,
    isValid: userStudentIdIsValid,
    hasError: userStudentIdHasError,
    valueChangeHandler: userStudentIdChangeHandler,
    inputBlurHandler: userStudentIdBlurHandler,
    reset: resetUserStudentId,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    userIdIsValid &&
    userPasswordValueIsValid &&
    userRetryPasswordValueIsValid &&
    userNameIsValid &&
    userEmailValueIsValid &&
    userStudentIdIsValid &&
    generation &&
    area
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // 로그인 API
    dispatch(
      registerAction({
        userIdValue,
        userPasswordValue,
        userNameValue,
        userEmailValue,
        userStudentIdValue,
        generation,
        area,
      })
    );

    console.log('등러ㅗㄱ', auth);
    // console.log(auth.data, auth.status, auth.error);

    // 회원가입 성공 시 메인으로 이동
    if (auth.error !== 'FAIL') {
      console.log('register success');
      navigate('/register');
    }

    resetUserId();
    resetUserPassword();
    resetUserRetryPassword();
    resetUserName();
    resetUserEmail();
    resetUserStudentId();
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
          marginBottom="0.1rem"
          color="#617485"
        />
        <ExistCheckButton value={userIdValue} />
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
          marginBottom="0.3rem"
          color="#617485"
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
          marginBottom="0.65rem"
          color="#617485"
        />
        <AuthInput
          label="이름"
          type="text"
          id="userName"
          placeholder="이름 입력"
          value={userNameValue}
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
          hasError={userNameHasError}
          errorText="필수 입력입니다."
          marginBottom="0.3rem"
          color="#617485"
        />
        <AuthInput
          label="본인 확인 이메일"
          type="text"
          id="userEmail"
          placeholder="이메일 입력"
          value={userEmailValue}
          onChange={userEmailChangeHandler}
          onBlur={userEmailBlurHandler}
          hasError={userEmailHasError}
          errorText="이메일 형식이 아닙니다."
          color="#617485"
        />
        <RegisterSelectorInfo
          type="text"
          id="userStudentId"
          placeholder="학번"
          value={userStudentIdValue}
          onChange={userStudentIdChangeHandler}
          onBlur={userStudentIdBlurHandler}
          hasError={userStudentIdHasError}
          errorText="필수 입력입니다."
          setGeneration={setGeneration}
          setArea={setArea}
        />
      </div>
      <SubmitButton height="2.8rem">회원가입</SubmitButton>
    </form>
  );
};

export default RegisterForm;
