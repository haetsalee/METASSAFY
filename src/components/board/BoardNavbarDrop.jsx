import styled from 'styled-components';

const area = [
  { key: 'gumi', label: '구미' },
  { key: 'seoul', label: '서울' },
  { key: 'gumi', label: '구미' },
  { key: 'gumi', label: '구미' },
  { key: 'gumi', label: '구미' },
];

const search = [
  { key: 'writer', label: '글쓴이' },
  { key: 'seoul', label: '제목' },
  { key: 'gumi', label: '본문' },
];

const BoardNavbarDrop = ({ type }) => {
  const list = type === 'area' ? area : search;

  return (
    <UlStyle>
      {list.map((item, index) => (
        <LiStyle key={index}>{item.label}</LiStyle>
      ))}
    </UlStyle>
  );
};

export default BoardNavbarDrop;

const UlStyle = styled.ul`
  border: 1px solid #799fc0;
  border-radius: 10px;
  margin-top: 0.2rem;
  padding: 0.5rem;
`;

const LiStyle = styled.li`
  background-color: pink;
  margin: 0.3rem;
  color: #8a8a8a;
  &:hover {
    color: black;
  }
`;
