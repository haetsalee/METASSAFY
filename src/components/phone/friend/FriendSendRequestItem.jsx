import React from 'react';
import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';

const FriendSendRequestItem = ({ friend, onDelete }) => {
  return (
    <>
      <GroutStyle>
        <FriendImgDivStyle>
          <FriendImgStyle
            img
            src={friend.image}
            alt={friend.name}
          ></FriendImgStyle>
        </FriendImgDivStyle>
        <FriendItemStyle>
          <TextGroutStyle>
            <NameTextStyle>{friend.name}</NameTextStyle>
            <StateTextStyle>{friend.state}</StateTextStyle>
          </TextGroutStyle>
          <IconStyle>
            <VscChromeClose
              color="#212121"
              onClick={() => onDelete(friend.id)}
            />
          </IconStyle>
        </FriendItemStyle>
      </GroutStyle>
      <HrStyle></HrStyle>
    </>
  );
};

export default FriendSendRequestItem;

const FriendImgStyle = styled.img`
  vertical-align: middle;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 70%;
  overflow: hidden;
`;

const FriendImgDivStyle = styled.div`
  display: inline-block;
  padding: 0.5rem;
`;

const TextGroutStyle = styled.div`
  display: inline-block;
  flex-direction: 'row';
  text-align: 'center';
`;

const NameTextStyle = styled.div`
  display: 'flex';
  flex-direction: 'column';
  text-align: 'center';
`;

const FriendItemStyle = styled.div`
  display: inline-block;
  justify-content: space-between;
  vertical-align: middle;
  padding: 5px;
`;

const GroutStyle = styled.div`
  display: inline-block;
`;

const IconStyle = styled.div`
  position: absolute;
  display: inline-block;
  right: 2rem;
  padding: 5px;
`;

const StateTextStyle = styled.div`
  font-size: 0.6rem;
  padding-top: 5px;
`;

const HrStyle = styled.hr`
  margin: 0px;
  background: #d9d9d9;
  border: 0.1px solid #d9d9d9;
`;
