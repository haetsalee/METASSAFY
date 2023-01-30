import React from 'react';
import TextGroup from './TextGroup';
import styled from 'styled-components';

function MajorPositionClass() {
  return (
    <MajorPositionClassStyle>
      <TextGroup name="Java" class="전공" />
      <TextGroup name="FE" class="포지션" />
      <TextGroup name="D211ER" class="공통" />
    </MajorPositionClassStyle>
  );
}

export default MajorPositionClass;

const MajorPositionClassStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 6rem 0 0 6rem;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.0500000007);
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-content: center;
  justify-content: space-around;
  /* width: 90%; */
  width: 18rem;
  margin: 0rem 0rem 5rem 0rem;
  padding: 0.5rem;
`;
