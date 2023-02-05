import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import { FiCamera } from 'react-icons/fi';
import { fetchProfileImage } from '../../../services/profile-service';

function BackgroundModifyBox({ image }) {
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
      const { data } = await fetchProfileImage(formData);
      console.log(data);
      setThumbnail(data);
    };
    uploadImage();
  };

  return (
    <WrapperStyle>
      <BackgroundBoxStyle>
        <form method="post" encType="multipart/form-data">
          <div className="button">
            <label htmlFor="chooseFile">
              <CircleBackgroundStyle>
                <CircleCameraStyle>
                  <FiCamera />
                </CircleCameraStyle>
                <CircleImgStyle src={thumbnail} id="imgChange"></CircleImgStyle>
              </CircleBackgroundStyle>
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
      </BackgroundBoxStyle>
    </WrapperStyle>
  );
}

export default BackgroundModifyBox;

const WrapperStyle = styled.div`
  display: block;
`;

const BackgroundBoxStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 20px;
  box-shadow: inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.0500000007);
  width: 20rem;
  height: 8rem;
  position: relative;
  margin-bottom: 2.8rem;
`;

const CircleBackgroundStyle = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to left, #c1a1d3, #c3ddff);
  /* background-color: #8b9cd9; */
  border-radius: 100%;
  position: absolute;
  top: 40%;
  left: 5%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const CircleCameraStyle = styled.div`
  z-index: 30;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.2rem;
`;

const CircleImgStyle = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(50%);
  opacity: 0.5;
`;
