import AudioModal from '../UI/modal/AudioModal';
import styled from 'styled-components';

const AUDIO = [
  { key: 1, label: 'All That' },
  { key: 2, label: 'Creative Minds' },
  { key: 3, label: 'Downtown' },
  { key: 4, label: 'Funny Song' },
  { key: 5, label: 'Happy Rock' },
  { key: 6, label: 'Hip Jazz' },
  { key: 7, label: 'Moose' },
  { key: 8, label: 'The Elevator Bossa Nova' },
];

function Audio({ onClose }) {
  const audioHandler = (key, e) => {
    console.log('선택한 노래 번호(1 ~ 8): ', key);
  };

  return (
    <AudioModal onClose={onClose}>
      <SectionStyle>
        <TitleStyle>BGM</TitleStyle>
        <UlStyle>
          {AUDIO.map((audio) => (
            <LiStyle
              key={audio.key}
              onClick={audioHandler.bind(null, audio.key)}
            >
              {audio.label}
            </LiStyle>
          ))}
        </UlStyle>
      </SectionStyle>
    </AudioModal>
  );
}

export default Audio;

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleStyle = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0 0.8rem 0;
`;

const UlStyle = styled.ul`
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 0 0 10px 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #617485;
    border-radius: 10px;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const LiStyle = styled.li`
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  padding-bottom: 0.5rem;
  margin: 0 0.5rem 0.4rem 0.8rem;
  border-bottom: 1px solid #d8e6f4;
  cursor: pointer;
`;
