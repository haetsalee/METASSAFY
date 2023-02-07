import { useState } from 'react';
import styled from 'styled-components';

import { FiImage } from 'react-icons/fi';

const BoardWriteImage = ({ setFile }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageName, setImageName] = useState('이미지를 선택해주세요.');

  // 제출한 이미지 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    setImageName(file.name);
    setFile(file);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <label htmlFor="chooseFile">
          <ImgSelectDivStyle>
            {imageName}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {imageSrc && <PreImgStyle src={imageSrc} alt="preview-img" />}
              {!imageSrc && <FiImage color="#799FC1" />}
              <div style={{ marginLeft: '0.3rem' }}>파일 선택</div>
            </div>
          </ImgSelectDivStyle>
        </label>
      </div>
      <input
        type="file"
        id="chooseFile"
        name="chooseFile"
        accept="image/*"
        onChange={(e) => {
          handleUploadImg(e);
          encodeFileToBase64(e.target.files[0]);
        }}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default BoardWriteImage;

const ImgSelectDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
  color: #5f6e7e;
  background-color: #f5fcff;
  font-size: 0.75rem;
  border: 1px solid #eef9ff;
  border-radius: 20px;
  cursor: pointer;
`;

const PreImgStyle = styled.img`
  max-width: 2rem;
  height: 100%;
`;
