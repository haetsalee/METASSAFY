import React from 'react';
import styled from 'styled-components';
import { VscAdd } from 'react-icons/vsc';

const FriendSearchItem = (props) => {
  return (
    <>
      <NameTextStyle>{props.name}</NameTextStyle>
      <StateTextStyle>{props.user_id}</StateTextStyle>
      <hr />
    </>
  );
};

export default FriendSearchItem;

const NameTextStyle = styled.div`
  display: 'flex';
  flex-direction: 'column';
  text-align: 'center';
`;

const StateTextStyle = styled.div`
  font-size: 0.6rem;
`;
