import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/use-scroll-fade-in';

function SecondItem({ content }) {
  const animatedItem = useScrollFadeIn('up', 1, 0);

  return (
    <WrapperStyle {...animatedItem}>
      <ImgDivStyle>
        <ImgStyle src={content.img} alt="소개 이미지" />
      </ImgDivStyle>
      <TextDivStyle>
        <ContentStyle>{content.content}</ContentStyle>
      </TextDivStyle>
    </WrapperStyle>
  );
}

export default SecondItem;

const WrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgDivStyle = styled.div`
  width: 21rem;
  height: 21rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: aliceblue;
  border-radius: 25px;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-position: center center;
  /* object-fit: contain; */
`;

const TextDivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

const ContentStyle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.4rem;
`;
