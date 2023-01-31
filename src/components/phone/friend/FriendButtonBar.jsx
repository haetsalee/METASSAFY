import { TbUsers, TbUserPlus, TbUserCheck, TbUserSearch } from 'react-icons/tb';
import styled from 'styled-components';

const ButtonBarStyle = styled.div`
  border-radius: 20px;
  width: 18rem;
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
      <TbUsers color="#617485" />
      <TbUserPlus color="#617485" />
      <TbUserCheck color="#617485" />
      <TbUserSearch color="#617485" />
    </ButtonBarStyle>
  );
};

export default FriendButtonBar;
