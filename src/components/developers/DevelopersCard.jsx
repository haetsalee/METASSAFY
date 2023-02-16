import styled from 'styled-components';
import emailImg from '../../assets/images/email.png';

function DevelopersCard(props) {
  return (
    <DevDiv>
      <DevelopDiv>
        <NameDiv>
          <NameWorkDiv>
            <WorkP>{props.work}</WorkP>
            <NameP>{props.name}</NameP>
          </NameWorkDiv>
          <RoadMapP>
            <ImgStyle src={emailImg} alt="email" /> {props.career}
          </RoadMapP>
        </NameDiv>
      </DevelopDiv>
      <DescribeP>{props.describe}</DescribeP>
      <StyleHr />
    </DevDiv>
  );
}

export default DevelopersCard;

const StyleHr = styled.hr`
  border-bottom: 1px solid #b4c5d4;
`;

const DevDiv = styled.div`
  width: 30rem;
`;

const ImgStyle = styled.img`
  width: 25px;
  border-radius: 50%;
`;

const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
`;

const NameWorkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 40%;
`;

const DevelopDiv = styled.div`
  width: 30rem;
  display: flex;
  margin: 1rem 2rem;
`;

const WorkP = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const NameP = styled.p`
  font-size: 2rem;
`;

const RoadMapP = styled.pre`
  display: flex;
  align-items: center;
  font-size: 1rem;
  white-space: pre-wrap;
  color: #436b71c9;
`;

const DescribeDiv = styled.div`
  height: 10rem;
  padding: 1rem 2rem;
  white-space: pre-wrap;
`;

const DescribeP = styled.p`
  word-break: break-all;
  line-height: 2rem;
  white-space: pre-wrap;
`;
