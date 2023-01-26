import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Kakao } from '../../assets/icons/kakao.svg';
import { ReactComponent as Naver } from '../../assets/icons/naver.svg';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  margin: 10px 0;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 11px;
  color: #799fc0;
  font-family: korail_bold;
  margin-top: 13px;
`;

const LoginBottom = (props) => {
  return (
    <Fragment>
      <StyledDiv>
        <Google />
        <Kakao />
        <Naver />
      </StyledDiv>
      <StyledP>도움이 필요하신가요?</StyledP>
    </Fragment>
  );
};

export default LoginBottom;
