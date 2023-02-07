import styled from 'styled-components';
import ArticleButtonWrapper from './ArticleButtonWrapper';
import ArticleInfoWriter from './ArticleInfoWriter';

const ArticleInfo = () => {
  //   const date = new Date(card.regtime);
  //   const strDate =
  //     String(date.getFullYear()).slice(2, 4) +
  //     '.' +
  //     String(date.getMonth()).padStart(2, '0') +
  //     '.' +
  //     String(date.getDate()).padStart(2, '0');

  return (
    <SectionStyle style={{ width: '100%' }}>
      <ContentDivStyle>
        <ImgStyle src="https://kr.object.ncloudstorage.com/metassafy/4410082f-7a3f-4478-8db1-74907d98284e스너프킨.jpg" />
        <TextStyle>
          게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글
        </TextStyle>
      </ContentDivStyle>
      <WriteInfoDivStyle>
        <ArticleInfoWriter />
        <ArticleButtonWrapper />
      </WriteInfoDivStyle>
    </SectionStyle>
  );
};

export default ArticleInfo;

const SectionStyle = styled.div`
  display: flex;
  padding: 1.5rem;
`;

const ContentDivStyle = styled.div`
  width: 85%;
  margin-right: 1rem;
`;

const ImgStyle = styled.img`
  width: 100%;
  max-height: 18rem;
  border-radius: 16px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const TextStyle = styled.div`
  width: 100%;
`;

const WriteInfoDivStyle = styled.div`
  width: 15%;
  min-width: 10rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`;
