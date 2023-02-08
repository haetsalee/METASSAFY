import { useParams } from 'react-router';
import Phone from '../../components/UI/Phone';

function PhoneChatEdit() {
  const params = useParams();
  const room = params.id;

  return (
    <div>
      <p>나가기</p>
      <p>이름 수정</p>
    </div>
  );
}

export default PhoneChatEdit;
