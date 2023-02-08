import DevelopersList from '../components/developers/DevelopersList';
import developersImg from '../assets/images/develop_check.jpg';

import styled from 'styled-components';

export default function DevelopersPage() {
  return (
    <div>
      <DevelopImg src={developersImg} alt="developersImg" />
      <DevelopersList />
    </div>
  );
}

const DevelopImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
