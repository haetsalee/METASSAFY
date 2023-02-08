import styled from 'styled-components';

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { getBoardList } from '../../../services/board-service';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const area = [
  { key: 'seoul', label: '서울' },
  { key: 'gwang', label: '광주' },
  { key: 'gumi', label: '구미' },
  { key: 'dae', label: '대전' },
  { key: 'bul', label: '부울경' },
];

const BoardNavbarDropArea = ({ type }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const list = area;

  // 지역별 검색
  const clickHandler = (index) => {
    const query = `key=${type}&popularity=false&user_id=${user.user_id}&word=${list[index].label}`;
    navigate(`/board/list?${query}`);
  };

  return (
    <UlStyle>
      {list.map((item, index) => (
        <LiStyle key={index} onClick={clickHandler.bind(null, index)}>
          {item.label}
        </LiStyle>
      ))}
    </UlStyle>
  );
};

export default BoardNavbarDropArea;

const UlStyle = styled.ul`
  width: 10rem;
  border: 1px solid #799fc0;
  border-radius: 10px;
  margin-top: 0.2rem;
  z-index: 10;
  background-color: white;
`;

const LiStyle = styled.li`
  padding: 0.4rem 0;
  text-align: center;
  border-radius: 10px;
  color: #8a8a8a;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #e0f4ff;
  }
`;

const SearchformStyle = styled.form`
  display: flex;
  width: 100%;

  & > input {
    width: 7rem;
    height: 1.3rem;
    margin: 0.4rem;
    border: none;
    border-style: none;
    border-bottom: 1px solid #8a8a8a;
    &:active,
    &:focus {
      outline: none;
    }
  }

  & > button {
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }

  & > button > svg {
    font-size: 1.2rem;
    margin: 0.4rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;
