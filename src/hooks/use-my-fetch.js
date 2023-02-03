import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserInfo } from '../services/auth-service';
import { loginSlice } from '../store/slice/authSlice';
import { getJsonLocalUserInfo } from '../utils/local-storage';

// 페이지 렌더링 시 리덕스에서 자신의 유저 정보 가져오기
function useMyFetch() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchUser = async () => {
      const { error } = await fetchUserInfo();
      if (!error) {
        const info = getJsonLocalUserInfo();
        dispatch(loginSlice(info));
      }
    };
    fetchUser();
  }, []);

  return user;
}

export default useMyFetch;
