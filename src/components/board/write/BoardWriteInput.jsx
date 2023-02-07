import styled from 'styled-components';

const BoardWriteInput = ({ type, label, placeholder }) => {
  return (
    <InputWrapper>
      <TitleDiv>{label}</TitleDiv>
      <InputStyle type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default BoardWriteInput;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 100%;
  background-color: #e0f4ff;
  height: 2rem;
  border-radius: 20px;
  font-size: 0.8rem;
  padding: 0.7rem 1.3rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.132);
  color: #617485;
`;

const InputStyle = styled.input`
  width: 98%;
  padding: ${(props) => (props.type === 'content' ? '1rem' : '0.3rem')};
  margin: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: ${(props) => (props.type === 'content' ? '1rem' : '1.5rem')};
  color: #617485;

  border-bottom: ${(props) =>
    props.type === 'content' ? 'none' : '1px solid #cccccc'};

  &:active,
  &:focus {
    outline: none;
  }
`;
