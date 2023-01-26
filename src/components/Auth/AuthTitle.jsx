import React, { Fragment } from 'react';

import styled from 'styled-components';

const SubTitle = styled.h3`
  font-family: 'korail_bold';
  text-align: center;
  margin: 0;
`;

const Title = styled.h3`
  font-family: 'korail_bold';
  text-align: center;
  color: #799fc0;
  font-size: 30px;
  margin-top: 0;
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
