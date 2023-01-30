import React from 'react';

import AuthModal from '../UI/modal/AuthModal';
import AuthTitle from './AuthTitle';
import RegisterForm from './RegisterForm';
import AuthClose from './AuthClose';

const Register = (props) => {
  return (
    <AuthModal>
      <AuthClose onClose={props.onClose} />
      <AuthTitle title="METASSAFY!" subTitle="WELCOME TO" />
      <RegisterForm />
    </AuthModal>
  );
};

export default Register;
