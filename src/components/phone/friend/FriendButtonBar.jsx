import styled from 'styled-components';
import UserButton from '../friend/UserButton';
import UserPlusButton from '../friend/UserPlusButton';
import UserCheckButton from '../friend/UserCheckButton';
import UserSearchButton from '../friend/UserSearchButton';

const ButtonBarStyle = styled.div`
  border-radius: 20px;
  width: 17rem;
  height: 2rem;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0.5rem;
  justify-content: space-between;
  display: flex;
`;

const FriendButtonBar = () => {
  return (
    <ButtonBarStyle>
      <UserButton />
      <UserPlusButton />
      <UserCheckButton />
      <UserSearchButton />
    </ButtonBarStyle>
  );
};

export default FriendButtonBar;
