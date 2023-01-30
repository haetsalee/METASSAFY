import React, { Fragment } from 'react';

import styled from 'styled-components';

const SubTitle = styled.h3`
  font-family: 'korail_bold';
  text-align: center;
  margin: 38px 0 10px 0;
  font-size: 20px;
  letter-spacing: -1px;
`;

const Title = styled.h3`
  font-family: 'korail_bold';
  text-align: center;
  color: #799fc0;
  font-size: 30px;
  margin: 0 0 30px 0;
`;

const AuthTitle = (props) => {
  return (
    <Fragment>
      <SubTitle>{props.subTitle}</SubTitle>
      <Title>{props.title}</Title>
    </Fragment>
  );
};

export default AuthTitle;
