import styled from 'styled-components';

const Avatar = () => {
  return (
    <ImgStyle
      src="https://kr.object.ncloudstorage.com/metassafy/4410082f-7a3f-4478-8db1-74907d98284e스너프킨.jpg"
      alt="avatar img"
    />
  );
};

export default Avatar;

const ImgStyle = styled.img`
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 0.8rem;
  border-radius: 50%;
`;
