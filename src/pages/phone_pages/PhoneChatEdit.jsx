import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Phone from '../../components/UI/Phone';
import API from '../../utils/api';

function PhoneChatEdit() {
  const params = useParams();
  const room = params.id;
  const [newName, setNewName] = useState('');

  function changeName() {
    API.put(`/chat/room`, {
      params: { croom_name: newName, croom_no: room },
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <CenterDiv>
      !!둘다 아직 안됨!!
      <p>이름 수정</p>
      <InputName
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={changeName}>수정!</button>
      {newName}
      <p>채팅방 나가기</p>
      <button>out</button>
    </CenterDiv>
  );
}

export default PhoneChatEdit;

const InputName = styled.input`
  border: 1px solid black;
`;

const CenterDiv = styled.div`
  text-align: center;
  margin: 3rem;
`;
