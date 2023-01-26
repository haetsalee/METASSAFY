import React, { Fragment } from 'react';

import SubmitButton from './SubmitButton';

const SubmitButtons = (props) => {
  return (
    <Fragment>
      <SubmitButton>제출하기</SubmitButton>
      <SubmitButton borderColor="#D9D9D9" backgroundColor="#F1F3F5">
        처음이신가요? <span style={{ color: '#799FC0' }}>회원가입</span>하기
      </SubmitButton>
    </Fragment>
  );
};

export default SubmitButtons;
