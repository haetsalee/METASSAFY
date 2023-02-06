import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect, useCallback } from 'react';
function UnityPage() {
  const { unityProvider, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: 'Build/Build.loader.js',
      dataUrl: 'Build/Build.data',
      frameworkUrl: 'Build/Build.framework.js',
      codeUrl: 'Build/Build.wasm',
    });
  const handleClick = useCallback((mode) => {
    console.log('클릭 이벤트 발생:' + mode);
  }, []);
  useEffect(() => {
    addEventListener('openPhone', handleClick);
    return () => {
      removeEventListener('openPhone', handleClick);
    };
  }, [addEventListener, removeEventListener, handleClick]);
  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}

export default UnityPage;
