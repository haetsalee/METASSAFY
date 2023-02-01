import React from 'react';

import AuthTitle from '../components/auth/AuthTitle';
import RegisterForm from '../components/auth/register/RegisterForm';
import styled from 'styled-components';
import Phone from '../components/UI/Phone';

const Board = () => {
  return (
    <div>
      <Phone>꺄 </Phone>
    </div>
  );
};

export default Board;

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperStyle = styled.div`
  width: 350px;
`;
