import React, { Fragment } from 'react';
import styled from 'styled-components';

import SubmitButton from './SubmitButton';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Kakao } from '../../assets/icons/kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/naver.svg';

const LoginBottom = (props) => {
  return (
    <Fragment>
      <SubmitButton
        color="black"
        borderColor="#D9D9D9"
        backgroundColor="#F1F3F5"
      >
        처음이신가요? <span style={{ color: '#799FC0' }}>회원가입</span>하기
      </SubmitButton>
      <HrStyle />
      <DivStyle>
        <Google />
        <Kakao />
        <Naver />
      </DivStyle>
      <PStyle>도움이 필요하신가요?</PStyle>
    </Fragment>
  );
};

export default LoginBottom;

const HrStyle = styled.hr`
  margin: 0;
  border: 0;
  border-bottom: 1.5px dashed #eee;
`;

const DivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  margin: 15px 0;
`;

const PStyle = styled.p`
  text-align: center;
  font-size: 11px;
  color: #799fc0;
  font-family: korail_bold;
  margin-top: 13px;
`;
