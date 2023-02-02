import React from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  let user = 'annonymous';
  if (window.localStorage.getItem('USER')) {
    user = JSON.parse(window.localStorage.getItem('USER'));
  }

  return (
    <MyProfileDivStyle>
      <MyProfileImgDivStyle>
        <MyProfileImgStyle
          img
          src={user.profile_img}
          alt={user.name}
        ></MyProfileImgStyle>
      </MyProfileImgDivStyle>
      <NameTextStyle>{user.name}</NameTextStyle>
    </MyProfileDivStyle>
  );
};

export default MyProfile;

const MyProfileImgStyle = styled.img`
  vertical-align: middle;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 70%;
  overflow: hidden;
`;

const MyProfileImgDivStyle = styled.div`
  display: inline-block;
  padding: 0.5rem;
`;

const MyProfileDivStyle = styled.div`
  border-radius: 20px;
  width: 18rem;
  height: 3rem;
  position: relative;
  margin-top: 5px;
`;

const NameTextStyle = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
