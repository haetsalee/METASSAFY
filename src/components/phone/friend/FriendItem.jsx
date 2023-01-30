import React from 'react';
import styled from 'styled-components';

const FriendItem = ({ friend, onDelete }) => {
  return (
    <li>
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
            {friend.state}
          </TextGroutStyle>
          <button className="FriemdMessage" onClick={() => console.log('클릭')}>
            채팅
          </button>
          <button className="FriendDelete" onClick={() => onDelete(friend.id)}>
            삭제
          </button>
        </FriendItemStyle>
      </GroutStyle>
      <hr />
    </li>
  );
};

export default FriendItem;

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
