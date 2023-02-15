import styled from 'styled-components';

import MainImage from '../components/main/MainImage';
import FirstContent from '../components/main/FirstContent';
import SecondContent from '../components/main/SecondContent';

function MainPage() {
  return (
    <SectionStyle>
      <MainImage />
      <WrapperStyle>
        <FirstContent />
        <SecondContent />
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
