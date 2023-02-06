import styled from 'styled-components';

const area = [
  { key: 'seoul', label: '서울' },
  { key: 'gwang', label: '광주' },
  { key: 'gumi', label: '구미' },
  { key: 'dae', label: '대구' },
  { key: 'bul', label: '부울경' },
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
  width: 10rem;
  position: absolute;
  top: 2rem;
  border: 1px solid #799fc0;
  border-radius: 10px;
  margin-top: 0.2rem;
  z-index: 10;
  background-color: white;
`;

const LiStyle = styled.li`
  width: 100%;
  padding: 0.4rem 0;
  margin: 0.3rem 0;
  text-align: center;
  color: #8a8a8a;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
