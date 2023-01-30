import styled from 'styled-components';
import Dropdown from './Dropdown';

const RegisterSelectorInfo = (props) => {
  return (
    <DivStyle>
      <Dropdown title="기수" list={['8기', '7기', '6기']} />
      <Dropdown title="지역" list={['구미', '서울', '광주']} />
      <Dropdown title="기수" list={['8기', '7기', '6기']} />
    </DivStyle>
  );
};

export default RegisterSelectorInfo;

const DivStyle = styled.div`
  display: flex;
`;
