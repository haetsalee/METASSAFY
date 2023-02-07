import { useState } from 'react';
import { Fragment } from 'react';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchBoardLike,
  fetchBoardLikeDelete,
  fetchBoardLikePost,
} from '../../../services/board-service';

const Heart = ({ type, no, isLike }) => {
  const user = useSelector((state) => state.auth.user);
  const [like, setLike] = useState(isLike);

  const heartHandler = async (e) => {
    e.preventDefault();
    const user_id = user.user_id;
    const data = { type, no, user_id };
    if (like === 0) {
      await fetchBoardLikePost(data); // 좋아요 요청
    } else {
      await fetchBoardLikeDelete(data); // 싫어요 요청
    }
    setLike(!like);
  };

  return (
    <Fragment>
      <ButtonStyle like={like} onClick={heartHandler}>
        {!!like && <BsSuitHeartFill />}
        {!like && <BsSuitHeart />}
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
    color: red;
    font-size: 1.3rem;
  }

  &:hover svg {
    color: black;
  }
`;
