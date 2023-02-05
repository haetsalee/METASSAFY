import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Phone from '../UI/Phone';
import ModifyInputBoxList from './ModifyInputBoxList';
import BackgroundModifyBox from './common/BackgroundModifyBox';
import { useEffect } from 'react';

const ProfileModify = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Phone style={{ margin: '0' }}>
      <ProfileContainer>
        <BackgroundModifyBox user_id={user.user_id} image={user.profile_img} />
        <ModifyInputBoxList />
      </ProfileContainer>
    </Phone>
  );
};

export default ProfileModify;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
  padding: 2rem 0;
`;
