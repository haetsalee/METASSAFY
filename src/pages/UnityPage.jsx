import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useCallback, useState } from 'react';
import { getLocalUserInfo } from '../utils/local-storage';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';
import OpenViduInModal from '../components/phone/OpenViduInModal';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import phoneImg from '../assets/images/phone.png';
import phoneImgFront from '../assets/images/phone_front.png';

function UnityPage() {
  const [user, setUser] = useState(getLocalUserInfo());
  const [modal, setModal] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const navigate = useNavigate();

  const loginUser = JSON.parse(user);
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

  //비디오 룸 닫기
  const onClose = () => {
    setModal(false);
    sendMessage('videoRoom', 'restartUntiy');
    console.log(modal);
  };

  useEffect(() => {});

  useEffect(() => {
    if (isLoaded) {
      // console.log(loginUser.name + ' 가 메타싸피에 접속');
      // sendMessage('ValueManager', 'getUserId', loginUser.name);
      console.log(`${loginUser.name}(${loginUser.user_id}) 가 메타싸피에 접속`);
      sendMessage(
        'ValueManager',
        'getUserId',
        `${loginUser.name}(${loginUser.user_id})`
      );
    }
  }, [isLoaded]);

  useEffect(() => {
    console.log('dddd');
    addEventListener('openPhone', (mode) => {
      console.log(mode);
      if (mode == 'videoRoom' || mode == 'videoRoom2' || mode == 'videoRoom3') {
        //비디오룸 들어가서 회의실 입장 클릭
        sendMessage('ValueManager', 'setUnityFalse');
        setModal(true);
      } else {
        const userId = mode.split('(')[1].split(')');
        if (userId[0] !== loginUser.user_id) {
          setIsPhone(true);
          sendMessage('ValueManager', 'setUnityFalse');
          navigate(`phone/profile/${userId[0]}`);
        }
      }
    });
    return () => {
      removeEventListener('openPhone', () => {});
    };
  });

  return (
    <div>
      {/* <ImgStyle
          src={phoneImg}
          alt="phone"
          onClick={() => {
            if (isPhone === false) {
              setIsPhone(true);
              sendMessage('ValueManager', 'setUnityFalse');
              navigate(`phone/home`);
            } else {
              setIsPhone(false);
              sendMessage('ValueManager', 'setUnityTrue');
              navigate(`/unity`);
            }
          }}
        /> */}
      <Outlet />
      {!isLoaded && (
        <Loading>
          <FadeLoader color="#36d7b7" />
        </Loading>
      )}
      {isPhone ? (
        <ImgStyle
          src={phoneImgFront}
          alt="phone"
          onClick={() => {
            if (isPhone === false) {
              setIsPhone(true);
              sendMessage('ValueManager', 'setUnityFalse');
              navigate(`phone/home`);
            } else {
              setIsPhone(false);
              sendMessage('ValueManager', 'setUnityTrue');
              navigate(`/unity`);
            }
          }}
        />
      ) : (
        <ImgStyle
          src={phoneImg}
          alt="phone"
          onClick={() => {
            if (isPhone === false) {
              setIsPhone(true);
              sendMessage('ValueManager', 'setUnityFalse');
              navigate(`phone/home`);
            } else {
              setIsPhone(false);
              sendMessage('ValueManager', 'setUnityTrue');
              navigate(`/unity`);
            }
          }}
        />
      )}

      <Unity
        unityProvider={unityProvider}
        tabIndex={1}
        style={{ width: '100%', height: '95%' }}
        id="metassafy"
      />

      {modal && <OpenViduInModal onClose={onClose} />}
    </div>
  );
}

export default UnityPage;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImgStyle = styled.img`
  width: 4rem;
  height: 6rem;
  float: left;
  top: 80%;
  left: 85%;
  position: absolute;
  cursor: pointer;
`;
