import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border-width: 1px;
  padding: 2px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || '#799FC0'};
  border-color: ${(props) => props.borderColor || '#799FC1'};
`;

const SubmitButton = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default SubmitButton;
