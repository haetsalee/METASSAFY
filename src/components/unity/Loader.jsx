import { useState } from 'react';
import styled from 'styled-components';

import CircularProgressWithLabel from './CircularProgressWithLabel';
import useInterval from '../../hooks/use-interval';
import loadingIn from '../../assets/images/loader/loadingIn.png';

const texts = [
  '그거 아시나요? 구미 캠퍼스에는 "인내의 숲"이 있어요!',
  'Shift키로 달려봅시다.',
  '숫자키, -, =, E, R, F 키로 감정을 나타낼 수 있어요.',
  'B 키로 인사할 수 있어요.',
  'Z ~ B 키로 춤출 수 있어요.',
  '대외비인 부울경 캠퍼스에는 특별한 맵이..?!',
  '싸피에 유령이 나타난다는 소식이...?',
  '마음에 드는 배경 음악과 함께 춤을 춰봐요.',
  '휴대폰을 끄고 싶다면 다시 눌러보세요.',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function Loader({ progress }) {
  const [text, setText] = useState(texts[getRandomInt(0, texts.length + 1)]);

  useInterval(() => {
    const index = getRandomInt(0, texts.length);
    setText(texts[index]);
  }, 2000);

  return (
    <>
      <TextStyle>{text}</TextStyle>
      <CircularProgressWithLabel value={Math.round(progress * 100)} />
      <ImgStyle src={loadingIn}></ImgStyle>
    </>
  );
}

export default Loader;

const TextStyle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #4f88cd;
  margin-bottom: 3rem;
`;

const ImgStyle = styled.img`
  width: 55rem;
  margin-top: 2rem;
`;
