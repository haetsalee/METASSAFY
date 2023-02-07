import styled from 'styled-components';

const BoardWriteInput = ({ type }) => {
  return (
    <InputWrapper>
      <TitleDiv>제목</TitleDiv>
      <InputStyle value="제목" />
    </InputWrapper>
  );
};

export default BoardWriteInput;

const InputWrapper = styled.div`
  width: 100%;
`;

const TitleDiv = styled.div`
  background-color: red;
`;

const InputStyle = styled.input`
  background-color: blue;
`;
