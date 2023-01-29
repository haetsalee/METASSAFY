import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
  font-family: korail_bold;
  color: '#292D32';
`;

const StyledInput = styled.input`
  height: 35px;
  border-width: 1px;
  border-color: ${(props) => (props.hasError ? '#FDA29B' : '#CED4DA')};
  border-radius: 8px;
  padding: 10px;
  border-style: solid;
  font-family: korail_light;
  font-size: 13px;
  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 3px;
  font-size: 5px;
  font-family: korail_light;
  letter-spacing: 0.5px;
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
      {props.hasError && <ErrorText>{props.errorText}</ErrorText>}
    </StyledWrapper>
  );
};

export default AuthInput;
