import DevelopersCard from './DevelopersCard';
import styled from 'styled-components';

function DevelopersList() {
  return (
    <DevelopDiv>
      <FlexDiv>
        <BlankDiv />
        <InvitedImgStyle
          src="https://em-content.zobj.net/source/noto-emoji-animations/344/four-leaf-clover_1f340.gif"
          alt=""
        />
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describe"
        />
      </FlexDiv>
      <FlexDiv>
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribe"
        />
        <InvitedImgStyle
          src="https://em-content.zobj.net/source/noto-emoji-animations/344/gem-stone_1f48e.gif"
          alt=""
        />
        <BlankDiv />
      </FlexDiv>
      <FlexDiv>
        <BlankDiv />
        <InvitedImgStyle
          src="https://em-content.zobj.net/thumbs/120/openmoji/338/guitar_1f3b8.png"
          alt=""
        />
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describe"
        />
      </FlexDiv>
      <FlexDiv>
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribe"
        />
        <InvitedImgStyle
          src="https://em-content.zobj.net/source/microsoft-teams/337/sun-with-face_1f31e.png"
          alt=""
        />
        <BlankDiv />
      </FlexDiv>
      <FlexDiv>
        <BlankDiv />
        <InvitedImgStyle
          src="https://em-content.zobj.net/source/microsoft-teams/337/chair_1fa91.png"
          alt=""
        />
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describe"
        />
      </FlexDiv>
      <FlexDiv>
        <DevelopersCard
          work="팀장"
          name="김뫄뫄"
          career="career"
          describe="describedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribedescribe"
        />
        <InvitedImgStyle
          src="https://em-content.zobj.net/source/microsoft-teams/337/new-moon-face_1f31a.png"
          alt=""
        />
        <BlankDiv />
      </FlexDiv>
    </DevelopDiv>
  );
}

export default DevelopersList;

const InvitedImgStyle = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
  margin: 0rem 3rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0rem;
`;

const BlankDiv = styled.div`
  width: 20rem;
  height: 20rem;
`;

const DevelopDiv = styled.div`
  margin: 10rem 0rem;
`;
