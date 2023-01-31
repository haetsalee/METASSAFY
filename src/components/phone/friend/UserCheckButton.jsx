import { TbUserCheck } from 'react-icons/tb';
import styled from 'styled-components';

const UserCheckButton = () => {
  return (
    <IconButtonStyle>
      <TbUserCheck color="#617485" />
    </IconButtonStyle>
  );
};

export default UserCheckButton;

const IconButtonStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 3.6rem;
  display: inline-block;
  height: 2rem;
  width: 2rem;
  position: relative;
  text-align: center;
  line-height: 2rem;
`;
