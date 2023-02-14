import { useEffect } from 'react';
import styled from 'styled-components';

import MainContent from '../components/main/MainContent';
import MainImage from '../components/main/MainImage';

function MainPage() {
  useEffect(() => {});

  return (
    <SectionStyle>
      <MainImage />
      <WrapperStyle>
        <MainContent />
        <MainContent />
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
`;
