import styled from 'styled-components';
import { useState } from 'react';

const BoardWriteImage = ({ image }) => {
  const [thumbnail, setThumbnail] = useState(image);

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    setImgUrl(file);
  };

  //사용자가 올린 이미지를 db에 넣고 스토리지에 올라간 링크로 받아옴
  const setImgUrl = (file) => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append('profile_img', file);
      //   const { data } = await fetchProfileImage(formData);
      //   console.log(data);
      //   setThumbnail(data);
    };
    uploadImage();
  };

  return (
    <form method="post" encType="multipart/form-data">
      <div className="button">
        <label htmlFor="chooseFile">
          <DivStyle>ㅁㄴㅇ</DivStyle>
        </label>
      </div>
      <input
        type="file"
        id="chooseFile"
        name="chooseFile"
        accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
        onChange={handleUploadImg}
        style={{ display: 'none' }}
      />
    </form>
  );
};

export default BoardWriteImage;

const DivStyle = styled.div`
  cursor: pointer;
  background-color: #f5fcff;
  border: 1px solid #eef9ff;
  color: #5f6e7e;
`;
