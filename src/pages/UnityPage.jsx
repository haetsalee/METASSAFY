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
  });

  const onClose = () => {
    setModal(false);
    console.log(modal);
  };

  // const handleClick = useCallback((mode) => {
  //   console.log('이벤트 발생:' + mode);
  //   if (mode == 'phone') {
  //     alert('여기에 핸드폰 모달을 띄우세요.');
  //   }
  // }, []);

  useEffect(() => {});

  useEffect(() => {
    if (isLoaded) {
      // console.log(loginUser.user_id + ' 가 메타싸피에 접속');
      // sendMessage('ValueManager', 'getUserId', loginUser.user_id);
      console.log(loginUser.name + ' 가 메타싸피에 접속');
      sendMessage('ValueManager', 'getUserId', loginUser.name);
    }
  }, [isLoaded]);

  useEffect(() => {
    addEventListener('openPhone', () => {
      setModal(!modal);
      console.log(modal);
    });
    return () => {
      removeEventListener('openPhone', () => {});
    };
  });

  return (
    <div>
      {!isLoaded && (
        <Loading>
          <FadeLoader color="#36d7b7" />
        </Loading>
      )}
      <PositionDiv>
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
        <Outlet />
      </PositionDiv>
      <ModalDiv>
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          큰 모달 띄우기
        </button>
      </ModalDiv>
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
  top: 70%;
  left: 5%;
  position: absolute;
`;

const PositionDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
const ModalDiv = styled.div`
  height: 6rem;
  float: left;
  top: 20%;
  left: 5%;
  position: absolute;
`;
