import DevelopersList from '../components/developers/DevelopersList';
import developersImg from '../assets/images/develop_check.jpg';
import top from '../assets/images/top2.png';
import devImg from '../assets/images/dev.gif';
import dev from '../assets/images/dev.mp4';

import styled from 'styled-components';

export default function DevelopersPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <VideoStyle loop muted autoPlay>
        <source type="video/mp4" src={dev} />
      </VideoStyle>
      <DevelopersList />
    </div>
  );
}

const VideoStyle = styled.video`
  width: 100%;
  height: 80vh;
  border: none;
  outline: none;
  object-fit: fill;
  /* object-fit: contain; */
`;
