import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 10px;
  cursor: pointer;
  border-style: solid;
  font-family: 'korail_bold';
  font-size: 12px;
  ${(props) => {
    return css`
      color: ${props.color || 'white'};
      background-color: ${props.backgroundColor || '#799FC0'};
      border-color: ${props.borderColor || '#799FC1'};
    `;
  }}
`;

const SubmitButton = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default SubmitButton;
