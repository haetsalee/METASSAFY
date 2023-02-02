import BackgroundBox from '../phone/BackgroundBox';
import MajorPositionClass from '../phone/MajorPositionClass';
import TextGroupComponent from '../phone/TextGroupComponent';
import styled from 'styled-components';
import PhoneNav from '../phone/phoneNav/PhoneNav';

function Phone(props) {
  return (
    <PhoneStyle>
      {props.children}
      <PhoneNav />
    </PhoneStyle>
  );
}

export default Phone;

const PhoneStyle = styled.div`
  background-color: white;
  border-radius: 1rem;
  /* border: 10px rgb(121, 190, 232) solid; */
  width: 22rem;
  height: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  /* display: flex;
  flex-direction: column; */
  align-items: center;
`;
