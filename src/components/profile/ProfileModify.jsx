import styled from 'styled-components';
import BackgroundBox from './common/BackgroundBox';
import Phone from '../UI/Phone';
import ModifyInputBoxList from './ModifyInputBoxList';
import useInfo from '../../hooks/use-info';

const ProfileModify = () => {
  const user = useInfo();

  return (
    <Phone style={{ margin: '0' }}>
      <ProfileContainer>
        <BackgroundBox image={user.profile_img} />
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
