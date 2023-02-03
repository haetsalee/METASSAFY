import styled from 'styled-components';
import BackgroundBox from '../phone/BackgroundBox';
import Phone from '../UI/Phone';
import InputBoxList from './InputBoxList';

const ProfileModify = () => {
  return (
    <Phone style={{ margin: '0' }}>
      <ProfileContainer>
        <BackgroundBox />
        <InputBoxList />
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
