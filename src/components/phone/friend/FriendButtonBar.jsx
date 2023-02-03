import styled from 'styled-components';
import { TbUsers, TbUserPlus, TbUserCheck, TbUserSearch } from 'react-icons/tb';
import API from '../../../utils/api';

const FriendListBar = ({
  onClickPage,
  onClickRequest,
  onClickSearch,
  onClickSendRequest,
}) => {
  return (
    <ButtonBarStyle>
      <IconButtonStyle onClick={onClickPage} width="9rem">
        <TbUsers color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle onClick={onClickRequest} width="2rem">
        <TbUserPlus color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle onClick={onClickSendRequest} width="2rem">
        <TbUserCheck color="#617485" />
      </IconButtonStyle>
      <IconButtonStyle onClick={onClickSearch} width="2rem">
        <TbUserSearch color="#617485" />
      </IconButtonStyle>
    </ButtonBarStyle>
  );
};

export default FriendListBar;

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
