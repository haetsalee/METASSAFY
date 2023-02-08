import { useState } from 'react';
import { Fragment } from 'react';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBoardLikeDelete,
  fetchBoardLikePost,
} from '../../../services/board-service';

const Heart = ({ type, no, isLike, setLikeNum, setIsLike }) => {
  const user = useSelector((state) => state.auth.user);

  const heartHandler = async (e) => {
    e.preventDefault();
    const user_id = user.user_id;
    const data = { type, no, user_id };
    if (isLike === 0) {
      await fetchBoardLikePost(data); // 좋아요 요청
      setLikeNum((preState) => preState + 1);
    } else {
      await fetchBoardLikeDelete(data); // 싫어요 요청
      setLikeNum((preState) => preState - 1);
    }
    setIsLike((preState) => (preState === 0 ? 1 : 0));
  };

  return (
    <Fragment>
      <ButtonStyle like={isLike} onClick={heartHandler}>
        {!!isLike && <BsSuitHeartFill />}
        {!isLike && <BsSuitHeart />}
      </ButtonStyle>
    </Fragment>
  );
};

export default Heart;

const ButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  & svg {
    color: #f0b0bc;
    font-size: 1.3rem;
  }

  &:hover svg {
    color: black;
  }
`;
