// svg를 props, text도 props - 재활용 가능
import React from 'react';
import styled from 'styled-components';

function InfoBox(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottom: '2px solid lightgray',
          width: '18rem',
        }}
      >
        <div style={{ margin: '5px' }}>{props.icon}</div>
        <div>{props.text}</div>
      </div>
    </>
  );
}

export default InfoBox;
