import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { ReactComponent as Meta } from '../../assets/icons/meta.svg';
import { useState } from 'react';

function PhoneHomePage() {
  const navigate = useNavigate();
  const [camera, setCamera] = useState(false);
  function onCapture() {
    console.log('onCapture');
    html2canvas(document.getElementById('react-unity-webgl-canvas-1'))
      .then((canvas) => {
        onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
        const captures = document.getElementById('captures');
        const isit = document.getElementById('capture');
        console.log(isit);
        if (isit !== null) {
          captures.removeChild(isit);
        }
        canvas.id = 'capture';
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
        captures.appendChild(canvas);
        console.log(canvas);
      })
      .catch((err) => console.log(err));
  }

  function onSaveAs(url, filename) {
    console.log('onSaveAs');
    const link = document.createElement('a');

    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }
  return (
    <CenterDiv>
      {/* <Meta
        fill="navy"
        onClick={() => {
          navigate('/');
        }}
      /> */}
      {!camera && (
        <div>
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
          <button
            onClick={() => {
              setCamera(true);
            }}
          >
            카메라 키기
          </button>
        </div>
      )}
      {camera && (
        <div>
          <button onClick={onCapture}>캡쳐 실험</button>
          <ImgDiv id="captures"></ImgDiv>
          <p onClick={() => setCamera(false)}>홈 가기</p>
        </div>
      )}

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

const ImgDiv = styled.div`
  width: 100%;
  height: auto;
`;
