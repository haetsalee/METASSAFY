import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Avatar = ({ img, user }) => {
  const navigation = useNavigate();
  console.log(user, '------------???');
  return (
    <ImgStyle
      src={img}
      alt="avatar img"
      onClick={() => {
        navigation(`/profile/${user}`);
      }}
    />
  );
};

export default Avatar;

const ImgStyle = styled.img`
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 0.8rem;
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    cursor: pointer;
  }
`;
