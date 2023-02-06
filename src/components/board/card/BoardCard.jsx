import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heart from './Heart';

const BoardCard = () => {
  return (
    <Link to="/1" style={{ textDecoration: 'none', color: 'black' }}>
      <CardSection>
        <LikeDivStyle>
          <Heart isLike={true} />
          <p>21</p>
        </LikeDivStyle>
        <ImgStyle
          src="https://www.jungle.co.kr/image/ea06cd0346fa8777cb624e3f"
          alt="article img"
        ></ImgStyle>
        <LineDivStyle>
          <TitleStyle>게시글 제목</TitleStyle>
          <SubTitleStyle color="#AECBDB">0</SubTitleStyle>
        </LineDivStyle>
        <LineDivStyle>
          <SubTitleStyle>김싸피 (6기 / 서울)</SubTitleStyle>
          <SubTitleStyle>23.02.06</SubTitleStyle>
        </LineDivStyle>
        <ContentStyle>
          게시글 내용 글자수 한... 50자 이내까지만 보이는 미리보기 같은 것을...
        </ContentStyle>
      </CardSection>
    </Link>
  );
};

export default BoardCard;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 14rem;
  min-height: 20rem;
  padding: 0.8rem 1rem;
  margin: 0.3rem;
  background-color: white;
  border: 1px solid #617485;
  border-radius: 20px;
  cursor: pointer;
`;

const LikeDivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
`;

const ImgStyle = styled.img`
  width: auto;
  height: 12rem;
  margin: 0.3rem 0;
  border: 1px solid #4ea7f8;
  border-radius: 8px;
`;

const LineDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
`;

const TitleStyle = styled.section`
  font-size: 1.2rem;
  font-family: 'korail_bold';
`;

const SubTitleStyle = styled.section`
  color: ${(props) => props.color || '#adb5bd'};
  font-size: 0.5rem;
`;

const ContentStyle = styled.section`
  color: #799fc0;
  font-size: 0.5rem;
  margin-top: 1rem;
`;
