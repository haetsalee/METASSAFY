import React, { useState } from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  const [profile, setProfile] = useState(MyProfileData);
  return (
    <MyProfileDivStyle>
      <MyProfileImgDivStyle>
        <MyProfileImgStyle
          img
          src={profile.image}
          alt={profile.name}
        ></MyProfileImgStyle>
      </MyProfileImgDivStyle>
      <NameTextStyle>{profile.name}</NameTextStyle>
    </MyProfileDivStyle>
  );
};

const MyProfileData = {
  name: '이싸피',
  image: `https://i.pinimg.com/736x/6f/39/6a/6f396afe45a5ec6c600a4e60afc7bfe0.jpg`,
};

export default MyProfile;

const MyProfileImgStyle = styled.img`
  vertical-align: middle;
  width: 2.2rem;
  height: 2.2rem;
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
