import styled from 'styled-components';

function ChatInviteItem() {
  return (
    <InvitedPeopleDiv>
      <InvitedImgStyle
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt=""
      />
      <InvitedP>초대된이름</InvitedP>
    </InvitedPeopleDiv>
  );
}

export default ChatInviteItem;

const InvitedPeopleDiv = styled.div`
  display: flex;
  margin: 0rem 0.5rem;
`;

const InvitedImgStyle = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

const InvitedP = styled.p`
  font-size: 0.8rem;
  margin: 0.3rem;
`;
