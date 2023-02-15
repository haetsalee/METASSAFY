import styled from 'styled-components';

import useScrollFadeIn from '../../hooks/use-scroll-fade-in';
import SecondItem from './SecondItem';
import { secondContent } from './content-text.js';

function SecondContent() {
  const animatedItem = useScrollFadeIn('up', 1, 0);

  return (
    <WrapperStyle>
      <TitleStyle {...animatedItem}>
        {secondContent.title}
        <p>{secondContent.subTitle}</p>
      </TitleStyle>
      <ContentStyle>
        {secondContent.contents.map((content, index) => (
          <SecondItem key={index} content={content} />
        ))}
      </ContentStyle>
    </WrapperStyle>
  );
}

export default SecondContent;

const WrapperStyle = styled.div`
  margin: 10rem 0;
  padding: 3rem;
  width: 100%;
  min-height: 50rem;
`;

const TitleStyle = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  white-space: pre-wrap;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  & p {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }
`;

const ContentStyle = styled.ul`
  width: 100%;
  min-height: 15rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
