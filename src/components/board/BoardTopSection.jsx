import styled from 'styled-components';

const BoardTopSection = () => {
  return (
    <SectionStyle>
      <h1>커뮤니티</h1>
      <p>메타싸피인들의 소통 공간</p>
    </SectionStyle>
  );
};

export default BoardTopSection;

const SectionStyle = styled.section`
  background-color: #6e7f88;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  & h1 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 0.4rem;
  }
  & p {
    opacity: 0.6;
  }
`;
