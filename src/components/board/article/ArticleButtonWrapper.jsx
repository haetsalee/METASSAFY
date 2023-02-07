import { BsBookmark, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';

const ArticleButtonWrapper = () => {
  return (
    <div>
      <ButtonStyle>
        <BsBookmark />
        <p>수정하기</p>
      </ButtonStyle>
      <ButtonStyle color="black" bgc="#F9F6FC">
        <BsTrash />
        <p>삭제하기</p>
      </ButtonStyle>
    </div>
  );
};

export default ArticleButtonWrapper;

const ButtonStyle = styled.button`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgc || '#799FC1'};
  border: 1px solid #ced4da;
  border-radius: 12px;
  margin-top: 0.8rem;
  font-size: 0.7rem;
  cursor: pointer;

  & svg {
    margin-right: 0.2rem;
  }
`;
