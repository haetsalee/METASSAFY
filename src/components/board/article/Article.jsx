import styled from 'styled-components';
import ArticleInfo from './ArticleInfo';
import Comments from './Comments';

const Article = () => {
  return (
    <ArticleSection>
      <TitleDiv>게시글 제목</TitleDiv>
      <ArticleInfo></ArticleInfo>
      <HrStyle />
      <Comments></Comments>
    </ArticleSection>
  );
};

export default Article;

const ArticleSection = styled.section`
  width: 90%;
  max-width: 1000px;
  height: 100%;
  margin-top: 2rem;
`;

const TitleDiv = styled.div`
  width: 100%;
  background-color: #e0f4ff;
  height: 2.2rem;
  border-radius: 20px;
  font-size: 1.2rem;
  padding: 0.5rem 1.3rem;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.132);
  color: #617485;
`;

const HrStyle = styled.hr`
  background-color: #ced4da;
  border: none;
  height: 0.1px;
  margin: 1rem 0;
`;
