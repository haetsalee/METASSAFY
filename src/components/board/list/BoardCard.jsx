import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heart from './Heart';

const BoardCard = ({ card }) => {
  const date = new Date(card.regtime);
  const strDate =
    String(date.getFullYear()).slice(2, 4) +
    '.' +
    String(date.getMonth()).padStart(2, '0') +
    '.' +
    String(date.getDate()).padStart(2, '0');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link
        to={'/board/' + card.article_no}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <CardSection>
          <LikeDivStyle>
            <Heart type="1" no={card.article_no} isLike={card.my_like} />
            <p>{card.like}</p>
          </LikeDivStyle>
          {card.thumbnail ? (
            <ImgStyle src={card.thumbnail} alt="article img"></ImgStyle>
          ) : (
            <div style={{ height: '0.5rem' }}></div>
          )}
          <LineDivStyle>
            <TitleStyle>{card.title}</TitleStyle>
            <SubTitleStyle color="#AECBDB">{card.hit}</SubTitleStyle>
          </LineDivStyle>
          <LineDivStyle>
            <SubTitleStyle>
              {card.name} ({card.generation}기 / {card.area})
            </SubTitleStyle>
            <SubTitleStyle>{strDate}</SubTitleStyle>
          </LineDivStyle>
          <ContentStyle className="content">{card.content}</ContentStyle>
        </CardSection>
      </Link>
    </div>
  );
};

export default BoardCard;

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 14rem;
  /* min-height: 20rem; */
  padding: 0.8rem 1rem;
  margin: 0.3rem;
  background-color: white;
  border: 1px solid #617485;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    /* background-color: #aecbdb; */
  }
`;

const LikeDivStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
`;

const ImgStyle = styled.img`
  width: auto;
  height: 12rem;
  margin: 0.3rem 0;
  border: 1px solid #4ea7f8;
  border-radius: 8px;
`;

const LineDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
`;

const TitleStyle = styled.section`
  font-size: 1.2rem;
  font-family: 'korail_bold';
`;

const SubTitleStyle = styled.section`
  color: ${(props) => props.color || '#adb5bd'};
  font-size: 0.5rem;
`;

const ContentStyle = styled.div`
  width: 100%;
  height: 1.3rem;
  color: #799fc0;
  font-size: 0.5rem;
  margin-top: 0.5rem;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
