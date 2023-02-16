import DevelopersList from '../components/developers/DevelopersList';
import developersImg from '../assets/images/develop_check.jpg';
import top from '../assets/images/top2.png';
import dev from '../assets/images/dev.gif';

import styled from 'styled-components';

export default function DevelopersPage() {
  return (
    <div>
      <DevelopImg src={dev} alt="developersImg" />
      <DevelopersList />
    </div>
  );
}

const DevelopImg = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
