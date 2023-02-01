import React from 'react';
import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';

const FriendSendRequestItem = ({ friend, onDeleteRequest }) => {
  return (
    <>
      <GroupStyle>
        <FriendItemStyle>
          <FriendImgDivStyle>
            <FriendImgStyle
              img
              src={`https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`}
              alt={friend.name}
            ></FriendImgStyle>
          </FriendImgDivStyle>
          <TextGroupStyle>
            <NameTextStyle>{friend.to_user_id}</NameTextStyle>
            <StateTextStyle>아직 친구가 아닙니다.</StateTextStyle>
          </TextGroupStyle>
        </FriendItemStyle>
        <IconStyle>
          <VscChromeClose
            color="#212121"
            disabled={friend.accept}
            onClick={() => {
              onDeleteRequest(friend.friend_no);
            }}
          />
        </IconStyle>
      </GroupStyle>
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
`;

const FriendImgDivStyle = styled.div`
  display: 'flex';
  padding: 0.5rem;
`;

const TextGroupStyle = styled.div`
  display: 'flex';
  flex-direction: 'row';
  text-align: 'center';
  margin: auto;
`;

const NameTextStyle = styled.div`
  display: 'flex';
  flex-direction: 'column';
  text-align: 'center';
`;

const StateTextStyle = styled.div`
  padding-top: 0.5rem;
  font-size: 0.5rem;
`;

const FriendItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
`;

const GroupStyle = styled.div`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
`;

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const HrStyle = styled.hr`
  margin: 0px;
  background: #d9d9d9;
  border: 0.1px solid #d9d9d9;
`;
