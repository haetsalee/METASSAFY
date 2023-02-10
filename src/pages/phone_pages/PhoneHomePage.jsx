import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PhoneHomePage() {
  const navigate = useNavigate();
  return (
    <CenterDiv>
      <p
        onClick={() => {
          navigate('/');
        }}
      >
        metassafy로 바로가기 버튼
      </p>
      <br />
      <p>캡쳐버튼</p>
      <br />
      <p>그외 이것저것 추가 예정</p>
    </CenterDiv>
  );
}

export default PhoneHomePage;

const CenterDiv = styled.div`
  text-align: center;
  margin: 7rem 4rem;
`;
