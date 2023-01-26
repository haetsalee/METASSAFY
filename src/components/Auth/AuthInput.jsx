import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-size: 10px;
  margin-bottom: 2px;
`;

const StyledInput = styled.input`
  height: 37px;
  border-width: 1px;
  border-color: ${(props) => (props.hasError ? '#FDA29B' : '#CED4DA')};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 3px;
`;

const ErrorText = styled.p`
  color: red;
  margin: 0;
  font-size: 5px;
`;

const AuthInput = (props) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor="name">{props.label}</StyledLabel>
      <StyledInput
        {...props}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.hasError && <ErrorText>필수 입력입니다.</ErrorText>}
    </StyledWrapper>
  );
};

export default AuthInput;
