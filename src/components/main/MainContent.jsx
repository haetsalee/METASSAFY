import styled from 'styled-components';

import useScrollFadeIn from '../../hooks/use-scroll-fade-in';
import background from '../../assets/images/main_background.png';
import Content from './Content';

const contents = [
  {
    key: 1,
    title: '다양한 이모지로 감정 공유하기',
    content: '이모지로 감정을 나타내고 춤을 추며 나를 드러내보아요.',
    img: background,
  },
  {
    key: 2,
    title: '원하는 배경 음악을 고르기',
    content: '다양한 배경 음악을 재생해 분위기를 맞춰보아요.',
    img: background,
  },
  {
    key: 1,
    title: '캠퍼스마다 다른 맵 즐기기',
    content: '캠퍼스 특성을 반영한 맵에서 소통해보아요.',
    img: background,
  },
];

const MainContent = () => {
  const animatedItem = useScrollFadeIn('up', 1, 0);

  return (
    <WrapperStyle>
      <TitleStyle {...animatedItem}>
        온라인으로
        <br />
        만나보세요.
        <p>타캠퍼스 사람들과 소통해보아요.</p>
      </TitleStyle>
      <ContentStyle>
        <Content content={contents[0]} />
        <Content content={contents[1]} />
        <Content content={contents[2]} direction="row" />
      </ContentStyle>
    </WrapperStyle>
  );
};

export default MainContent;

const WrapperStyle = styled.div`
  margin: 10rem 0;
  padding: 3rem;
  width: 100%;
  min-height: 50rem;
`;

const TitleStyle = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  /* font-family: Impact, Charcoal, sans-serif; */
  font-family: 'Black Han Sans', sans-serif;
  & p {
    font-size: 1.5rem;
    font-family: 'Black Han Sans', sans-serif;
  }
`;

const ContentStyle = styled.div`
  width: 100%;
  min-height: 45rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  & > div:nth-child(3) {
    grid-column: span 2;
  }
`;
