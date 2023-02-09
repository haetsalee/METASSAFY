import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Setting } from '../../../assets/icons/settings.svg';
import { NavLink } from 'react-router-dom';
import { getJsonLocalUserInfo } from '../../../utils/local-storage';

function BackgroundBox(props) {
  const user = getJsonLocalUserInfo()['user_id'] || 'annonymous';
  console.log(user, props.who, '--------');

  return (
    <WrapperStyle>
      <BackgroundBoxStyle>
        {user === props.who && (
          <SettingDiv>
            <NavLink to="../profile/modify">
              <Setting
                stroke="#617485"
                style={{ float: 'right', margin: '1rem' }}
              />
            </NavLink>
          </SettingDiv>
        )}
        {user !== props.who && (
          <SettingDiv>
            <Setting
              stroke="#617485"
              style={{ float: 'right', margin: '1rem' }}
            />
            친구추가 들어갈 예정
          </SettingDiv>
        )}
        <CircleBackgroundStyle>
          <CircleImgStyle src={props.image}></CircleImgStyle>
        </CircleBackgroundStyle>
      </BackgroundBoxStyle>
    </WrapperStyle>
  );
}

export default BackgroundBox;

const WrapperStyle = styled.div`
  display: block;
`;

const BackgroundBoxStyle = styled.div`
  background-color: #e0f4ff;
  border-radius: 20px;
  box-shadow: inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.0500000007);
  width: 20rem;
  height: 10rem;
  position: relative;
  margin-bottom: 3.3rem;
`;

const CircleBackgroundStyle = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to left, #c1a1d3, #c3ddff);
  /* background-color: #8b9cd9; */
  border-radius: 100%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CircleImgStyle = styled.img`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SettingDiv = styled.div`
  display: inline-block;
  width: 100%;
`;
