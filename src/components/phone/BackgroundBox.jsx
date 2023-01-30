import React from 'react';
import styled from 'styled-components';

function BackgroundBox() {
  return (
    <WrapperStyle>
      <BackgroundBoxStyle>
        <CircleBackgroundStyle>
          <CircleImgStyle></CircleImgStyle>
        </CircleBackgroundStyle>
      </BackgroundBoxStyle>
    </WrapperStyle>
  );
}

export default BackgroundBox;

const WrapperStyle = styled.div`
  display: block;
`;

const BackgroundBoxStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 20px;
  box-shadow: inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.0500000007);
  width: 18rem;
  height: 10rem;
  position: relative;
  margin-top: 15px;
  margin-bottom: 60px;
`;

const CircleBackgroundStyle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8b9cd9;
  border-radius: 100%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CircleImgStyle = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
