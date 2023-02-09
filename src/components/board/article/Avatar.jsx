import styled from 'styled-components';

const Avatar = ({ img }) => {
  return <ImgStyle src={img} alt="avatar img" />;
};

export default Avatar;

const ImgStyle = styled.img`
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 0.8rem;
  border-radius: 50%;
`;
