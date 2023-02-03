import styled from 'styled-components';
import BackgroundBox from './common/BackgroundBox';
import Phone from '../UI/Phone';
import ModifyInputBoxList from './ModifyInputBoxList';

const ProfileModify = () => {
  return (
    <Phone style={{ margin: '0' }}>
      <ProfileContainer>
        <BackgroundBox />
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
`;
