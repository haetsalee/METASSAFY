import React from 'react';
import styled from 'styled-components';

function TextGroup(props) {
  return (
    <TextGroupStyle>
      <NameTextStyle>{props.name}</NameTextStyle>
      {/* <b style={{margin: 0, padding: 0, fontSize: '1rem'}}>{props.name}</b> */}
      <b style={{ margin: 0, padding: 0, fontSize: '0.5rem' }}>{props.class}</b>
    </TextGroupStyle>
  );
}

export default TextGroup;

const TextGroupStyle = styled.div`
  display: 'flex';
  flex-direction: 'column';
  text-align: 'center';
`;
const NameTextStyle = styled.div`
  color: #8b9cd9;
  font-family: Korail Round Gothic Medium, 'Source Sans Pro';
`;
