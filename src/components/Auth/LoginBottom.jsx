import React, { Fragment } from 'react';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Kakao } from '../../assets/icons/kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/naver.svg';

const LoginBottom = (props) => {
  return (
    <Fragment>
      <Google />
      <Kakao />
      <Naver />
    </Fragment>
  );
};

export default LoginBottom;
