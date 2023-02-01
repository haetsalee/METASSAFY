import React from 'react';
import styled from 'styled-components';
import { VscAdd } from 'react-icons/vsc';

const FriendSearchItem = (props) => {
  return (
    <>
      <NameTextStyle>{props.name}</NameTextStyle>
      <StateTextStyle>{props.user_id}</StateTextStyle>
      <VscAdd
        color="#212121"
        onClick={() => {
          console.log(props.user_id);
          props.onAddFriend(props.user_id);
        }}
      />
      <HrStyle></HrStyle>
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

const HrStyle = styled.hr`
  margin: 0px;
  background: #d9d9d9;
  border: 0.1px solid #d9d9d9;
`;
