import styled from 'styled-components';

const CheckBoxInput = ({ title }) => {
  return <CheckBoxInputStyle>{title}</CheckBoxInputStyle>;
};

export default CheckBoxInput;

const CheckBoxInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
`;
