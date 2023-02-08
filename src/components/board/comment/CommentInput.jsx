import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  fetchCommentGet,
  fetchCommentPost,
} from '../../../services/board-service';
import Avatar from '../article/Avatar';

const CommentInput = ({ user_id, article_no, setComments }) => {
  const user = useSelector((state) => state.auth.user);
  const [disable, setDisable] = useState(true);
  const [text, setText] = useState('');

  const textHandler = (e) => {
    if (e.target.value.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    if (e.target.value.length > 300) {
      return;
    }
    setText(e.target.value);
  };

  const submitHandler = async () => {
    const body = {
      article_no,
      content: text,
      user_id,
    };
    await fetchCommentPost(body);
    // list update
    const { data } = await fetchCommentGet(article_no, user_id);
    setComments(data);
    setText('');
  };

  const onKeyHandler = (e) => {
    if (text && e.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <InputSection>
      <Avatar img={user.profile_img} />
      <InputWrapperStyle>
        <TextareaStyle
          value={text}
          onChange={textHandler}
          onKeyPress={onKeyHandler}
          placeholder="댓글로 의견을 나눠보세요"
        />
        <DivStyle>
          <p>{text.length}/300</p>
          <ButtonStyle disabled={disable} onClick={submitHandler}>
            등록
          </ButtonStyle>
        </DivStyle>
      </InputWrapperStyle>
    </InputSection>
  );
};

export default CommentInput;

const InputSection = styled.section`
  width: 80%;
  display: flex;
`;

const InputWrapperStyle = styled.div`
  width: 100%;
  background-color: #f5fcff;
  border-radius: 15px;
  color: #868e96;
`;

const TextareaStyle = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 0.8rem;
  border: none;
  color: #868e96;
  border-radius: 15px;
  font-size: 1.1rem;

  border: none;
  background-color: transparent;
  resize: none;

  &:active,
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #617485;
    border-radius: 10px;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const DivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  & p {
    font-size: 0.8rem;
  }
`;

const ButtonStyle = styled.button`
  padding: 0.3rem 1rem;
  margin: 0.2rem 0 0.4rem 0;
  border-radius: 4px;
  border: none;
  background-color: #799fc1;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ced4da;
  }

  &:hover {
    background-color: #1c3042;
    transform: scale(1.1);
  }
`;
