import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/use-scroll-fade-in';

const Content = ({ direction, content }) => {
  const animatedItem = useScrollFadeIn('up', 1, 0);

  return (
    <WrapperStyle direction={direction} {...animatedItem}>
      <TextDivStyle>
        <TitleStyle>{content.title}</TitleStyle>
        <ContentStyle>{content.content}</ContentStyle>
      </TextDivStyle>
      <ImgDivStyle>
        <ImgStyle src={content.img} alt="소개 이미지" />
      </ImgDivStyle>
    </WrapperStyle>
  );
};

export default Content;

const WrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || 'column'};
  background-color: aliceblue;
  border-radius: 25px;
`;

const TextDivStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleStyle = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ContentStyle = styled.div`
  margin-bottom: 0.5rem;
`;

const ImgDivStyle = styled.div`
  width: 100%;
  height: 13rem;
  margin: 1rem 0;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* object-fit: contain; */
`;
