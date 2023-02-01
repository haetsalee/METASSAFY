import styled from 'styled-components';

const DropdownInput = ({ title, data }) => {
  return (
    <DropdownInputStyle>
      {title}
      {data}
    </DropdownInputStyle>
  );
};

export default DropdownInput;

const DropdownInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orange;
`;
