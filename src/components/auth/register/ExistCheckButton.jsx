import styled from 'styled-components';

const ExistCheckButton = (props) => {
  const checkHandler = () => {
    if (!props.value) {
      console.log('입력하쇼');
      return;
    }
    console.log(props.value);
  };

  return <ButtonStyle onClick={checkHandler}>중복 확인</ButtonStyle>;
};

export default ExistCheckButton;

const ButtonStyle = styled.button`
  width: 5.5rem;
  height: 1.9rem;
  background-color: #e0f4ff;
  color: #617485;
  font-size: 0.85rem;
  // font-family: 'korail_bold';
  border: none;
  border-radius: 7px;
  cursor: pointer;
  float: right;
  margin: -0.5rem 0 0.6rem 0;
`;
