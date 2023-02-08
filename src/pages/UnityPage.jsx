import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useCallback, useState } from 'react';
import { getLocalUserInfo } from '../utils/local-storage';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';
function UnityPage() {
  const [user, setUser] = useState(getLocalUserInfo());
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

  const handleClick = useCallback((mode) => {
    console.log('이벤트 발생:' + mode);
    if (mode == 'phone') {
      alert('여기에 핸드폰 모달을 띄우세요.');
    }
  }, []);

  useEffect(() => {});

  useEffect(() => {
    if (isLoaded) {
      console.log(loginUser.user_id + ' 가 메타싸피에 접속');
      sendMessage('ValueManager', 'getUserId', loginUser.user_id);
    }
  }, [isLoaded]);

  useEffect(() => {
    addEventListener('openPhone', handleClick);
    return () => {
      removeEventListener('openPhone', handleClick);
    };
  }, [addEventListener, removeEventListener, handleClick]);

  return (
    <div>
      {!isLoaded && (
        <Loading>
          <FadeLoader color="#36d7b7" />
        </Loading>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ width: '100%', height: '95%' }}
      />
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
