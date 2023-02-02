import React from 'react';
import { useEffect, useState } from 'react';
import { getLocalUserInfo } from '../../utils/local-storage';
import styled from 'styled-components';
import API from '../../utils/api';

const BoardWrite = ({ changeMode }) => {
  const [user, setUser] = useState(getLocalUserInfo());
  const loginUser = JSON.parse(user);
  const [isThumbnail, setIsThumbnail] = useState(true);

  const [thumbnail, setThumbnail] = useState(
    'https://kr.object.ncloudstorage.com/metassafy/46322b57-7041-43d2-a970-665670d2bccesssssss.png'
  );

  const headers = { 'Content-Type': 'multipart/form-data' };
  useEffect(() => {
    //getList();
  }, []);

  const boardHandler = () => {
    changeMode('list');
  };

  //사진 추가 버튼을 누르면
  const handleUploadImg = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImgUrl(file);
  };
  //사용자가 올린 이미지를 db에 넣고 스토리지에 올라간 링크로 받아옴
  const setImgUrl = (file) => {
    const frm = new FormData();
    frm.append('image', file);
    API.post('board/uploadAndgetLink', frm, {
      headers,
    }).then(function (response) {
      makeHtmlImg(response.data);
      if (isThumbnail) {
        setThumbnail(response.data);
        setIsThumbnail(false);
      }
    });
  };
  //url 받아서 글쓰는 부분에 img 만들어 추가
  const makeHtmlImg = (url) => {
    let tagArea = document.getElementById('writeArea');
    let new_pTag = document.createElement('img');
    new_pTag.setAttribute('src', url);
    tagArea.appendChild(new_pTag);
  };

  //글 작성 버튼을 누르면 axios
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = document.getElementById('writeArea').innerHTML;
    let title = document.getElementById('titleArea').innerHTML;
    const boardDto = {
      user_id: loginUser.user_id,
      title: title,
      content: content,
      thumbnail: thumbnail,
    };
    console.log(thumbnail);
    API.post('board/writeSimple', boardDto).then(function (response) {
      // 성공한 경우 실행
      changeMode('list');
    });
  };
  return (
    <div>
      게시글 쓰기
      <button onClick={boardHandler}>뒤로</button>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          name="photo"
          accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
          onChange={handleUploadImg}
        />
        <br></br>
        제목:
        <div
          style={{ width: '80%', border: '1px solid black', float: 'right' }}
          contentEditable
          suppressContentEditableWarning
          id="titleArea"
        ></div>
        <WriteArea
          contentEditable
          suppressContentEditableWarning
          id="writeArea"
        ></WriteArea>
        <button>제출</button>
      </form>
      {/* <button onClick={write}>작성하기</button> */}
    </div>
  );
};
export default BoardWrite;
const WriteArea = styled.div`
  width: 22rem;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem auto;
  height: 30rem;
  flex-direction: column;
  overflow: auto;
`;
