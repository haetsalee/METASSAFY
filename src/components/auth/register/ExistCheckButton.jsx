import styled from 'styled-components';

const ExistCheckButton = () => {
  return <ButtonStyle>중복 확인</ButtonStyle>;
};

export default ExistCheckButton;

const ButtonStyle = styled.button`
  width: 90px;
  height: 30px;
  background-color: #e0f4ff;
  color: #617485;
  font-size: 13px;
  font-family: 'korail_bold';
  border: none;
  border-radius: 7px;
  cursor: pointer;
  float: right;
`;
