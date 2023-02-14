import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainImage from '../components/main/MainImage';

function MainPage() {
  useEffect(() => {});

  return (
    <SectionStyle>
      <MainImage />
      <WrapperStyle>
        {/* <img style={{ width: '100%' }} src="images/metassafy.gif"></img> */}
      </WrapperStyle>
    </SectionStyle>
  );
}

export default MainPage;

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const WrapperStyle = styled.div`
  width: 1200px;
  background-color: pink;
`;

const ImgWrapperStyle = styled.div``;
