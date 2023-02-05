import styled from 'styled-components';
import Phone from '../UI/Phone';
import ModifyInputBoxList from './ModifyInputBoxList';
import useInfo from '../../hooks/use-info';
import BackgroundModifyBox from './common/BackgroundModifyBox';

const ProfileModify = () => {
  const user = useInfo();
  console.log(user);

  return (
    <Phone style={{ margin: '0' }}>
      <ProfileContainer>
        {/* <BackgroundModifyBox image={user.profile_img} /> */}
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
