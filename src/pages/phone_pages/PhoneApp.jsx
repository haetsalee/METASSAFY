import styled from 'styled-components';

function PhoneApp() {
  return (
    <CenterDiv>
      app
      <p>그외 사이트 여럿</p>
      <br />
      <a href="https://www.acmicpc.net/" target="_blank">
        백준이미지
      </a>
      <br />
      <a href="http://edu.ssafy.com" target="_blank">
        싸피이미지
      </a>
      <br />
      <a href="https://lab.ssafy.com/" target="_blank">
        랩싸피이미지
      </a>
      <br />
      <a href="https://programmers.co.kr/" target="_blank">
        프로그래머스이미지
      </a>
      <br />
      <a href="https://swexpertacademy.com/" target="_blank">
        SWEA
      </a>
      <br />
      <a href="https://ssafy.atlassian.net/jira/your-work" target="_blank">
        싸피지라
      </a>
      <br />
      <a href="https://meeting.ssafy.com/" target="_blank">
        mm
      </a>
      <br />
      <a href="https://ssafyclass.webex.com/" target="_blank">
        웹엑스
      </a>
    </CenterDiv>
  );
}

export default PhoneApp;

const CenterDiv = styled.div`
  text-align: center;
  margin: 7rem 4rem;
`;
