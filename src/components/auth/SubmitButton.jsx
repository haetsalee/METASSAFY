import React from 'react';
import styled, { css } from 'styled-components';

const SubmitButton = (props) => {
  return (
    <ButtonStyle {...props} onClick={props.move}>
      {props.children}
    </ButtonStyle>
  );
};

export default SubmitButton;

const ButtonStyle = styled.button`
  width: 100%;
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
      height: ${props.height || '36px'};
    `;
  }}
`;
