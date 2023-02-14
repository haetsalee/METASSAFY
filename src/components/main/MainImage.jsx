import styled from 'styled-components';

import background from '../../assets/images/main_background.png';

const MainImage = () => {
  return (
    <ImgWrapperStyle>
      <TitleStyle>Meet MetaSSAFY</TitleStyle>
    </ImgWrapperStyle>
  );
};

export default MainImage;

const ImgWrapperStyle = styled.div`
  width: 100%;
  height: 35rem;
  background-image: url(${background});
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.div`
  font-size: 4.5rem;
  font-family: Impact, Charcoal, sans-serif;
`;
