import styled from 'styled-components';
import { TbUsers, TbUserPlus, TbUserCheck, TbUserSearch } from 'react-icons/tb';
// import UserButton from '../friend/UserButton';
// import UserPlusButton from '../friend/UserPlusButton';
// import UserCheckButton from '../friend/UserCheckButton';
// import UserSearchButton from '../friend/UserSearchButton';

const ButtonBarStyle = styled.div`
  border-radius: 20px;
  height: 2rem;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0.5rem;
  justify-content: space-between;
  display: flex;
`;

const IconButtonStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 3.6rem;
  display: inline-block;
  height: 2rem;
  width: ${(props) => props.width};
  position: relative;
  text-align: center;
  line-height: 2rem;
`;

const FriendListBar = ({
  onClickPage,
  onClickRequest,
  onClickSearch,
  onClickSendRequest,
}) => {
  return (
    <ButtonBarStyle>
      <IconButtonStyle width="9rem">
        <TbUsers onClick={onClickPage} color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle width="2rem">
        <TbUserPlus onClick={onClickRequest} color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle width="2rem">
        <TbUserCheck onClick={onClickSendRequest} color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle width="2rem">
        <TbUserSearch onClick={onClickSearch} color="#617485" />
      </IconButtonStyle>
    </ButtonBarStyle>
  );
};

export default FriendListBar;
