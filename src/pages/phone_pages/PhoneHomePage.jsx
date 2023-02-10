import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Meta } from '../../assets/icons/meta.svg';

function PhoneHomePage() {
  const navigate = useNavigate();
  return (
    <CenterDiv>
      {/* <Meta
        fill="navy"
        onClick={() => {
          navigate('/');
        }}
      /> */}
      <p>↓↓↓글자 누르면 url 바뀜</p>
      <br />
      <hr />
      <p
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 가기
      </p>
      <br />
      <p
        onClick={() => {
          navigate('/metassafy');
        }}
      >
        1인메타로 가기=유니티 나가기
      </p>
      <br />
      <p>그외 이것저것 추가 예정</p>
      <br />
    </CenterDiv>
  );
}

export default PhoneHomePage;

const CenterDiv = styled.div`
  text-align: center;
  margin: 7rem 4rem;
`;
