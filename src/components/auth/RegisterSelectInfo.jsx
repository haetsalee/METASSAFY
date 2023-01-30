import styled from 'styled-components';
import Dropdown from './Dropdown';

const StyledDiv = styled.div`
  display: flex;
`;

const RegisterSelectorInfo = (props) => {
  return (
    <StyledDiv>
      <Dropdown title="기수" list={['8기', '7기', '6기']} />
      <Dropdown title="지역" list={['구미', '서울', '광주']} />
      <Dropdown title="기수" list={['8기', '7기', '6기']} />
    </StyledDiv>
  );
};

export default RegisterSelectorInfo;
