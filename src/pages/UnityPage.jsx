import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';

import { Unity, useUnityContext } from 'react-unity-webgl';
import FadeLoader from 'react-spinners/FadeLoader';
import OpenViduInModal from '../components/phone/OpenViduInModal';
import phoneImg from '../assets/images/phone.png';
import phoneImgFront from '../assets/images/phone_front.png';
import { getJsonLocalUserInfo } from '../utils/local-storage';

function UnityPage() {
  const user = getJsonLocalUserInfo();
  console.log(user);
  const navigate = useNavigate();

  const [isVideo, setIsVideo] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const {
    unityProvider,
    addEventListener,
    removeEventListener,
    sendMessage,
    isLoaded,
  } = useUnityContext({
    loaderUrl: 'Build/Build.loader.js',
    dataUrl: 'Build/Build.data',
    frameworkUrl: 'Build/Build.framework.js',
    codeUrl: 'Build/Build.wasm',
    streamingAssetsUrl: 'streamingassets',
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  useEffect(() => {
    if (isLoaded) {
      console.log(`${user.name}(${user.user_id}) 가 메타싸피에 접속`);
      sendMessage('ValueManager', 'getUserId', `${user.name}(${user.user_id})`);
    }
  }, [isLoaded]);

  useEffect(() => {
    console.log('add event');
    addEventListener('openPhone', (mode) => {
      if (
        mode === 'videoRoom' ||
        mode === 'videoRoom2' ||
        mode === 'videoRoom3'
      ) {
        //비디오룸 들어가서 회의실 입장 클릭
        sendMessage('ValueManager', 'setUnityFalse');
        setIsVideo(true);
      } else if (mode === 'board') {
        boardHandler();
      } else {
        const userId = mode.split('(')[1].split(')');
        if (userId[0] !== user.user_id) {
          setIsPhone(true);
          navigate(`phone/profile/${userId[0]}`);
        }
      }
    });
    return () => {
      removeEventListener('openPhone', () => {});
    };
  }, []);

  // 비디오 룸 닫기
  const closeVideo = () => {
    setIsVideo(false);
    sendMessage('videoRoom', 'restartUntiy');
  };

  // 폰 모달
  const phoneHandler = () => {
    if (isPhone === false) {
      setIsPhone(true);
      sendMessage('ValueManager', 'setUnityFalse');
      navigate(`phone/home`);
    } else {
      setIsPhone(false);
      sendMessage('ValueManager', 'setUnityTrue');
      navigate(`/unity`);
    }
  };

  // 게시판 클릭하면 이동
  const boardHandler = () => {
    navigate('board/list');
  };

  return (
    <DivStyle>
      <Outlet />

      {/* 로딩중 */}
      {!isLoaded && (
        <Loading>
          <FadeLoader color="#36d7b7" />
        </Loading>
      )}
      {/* 휴대폰 모달 */}
      <ImgStyle
        isPhone={isPhone}
        phone={phoneImg}
        phoneFront={phoneImgFront}
        alt="phone"
        onClick={phoneHandler}
      />
      {/* 비디오 모달 */}
      {isVideo && <OpenViduInModal onClose={closeVideo} />}

      <Unity
        unityProvider={unityProvider}
        tabIndex={1}
        style={{ width: '100%', height: '100%' }}
        id="metassafy"
      />
    </DivStyle>
  );
}

export default UnityPage;

const DivStyle = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgStyle = styled.img.attrs(({ isPhone, phone, phoneFront }) => ({
  src: isPhone ? phoneFront : phone,
}))`
  width: 4rem;
  height: 6rem;
  float: left;
  top: 80%;
  left: 85%;
  position: absolute;
  cursor: pointer;
`;
