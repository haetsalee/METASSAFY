import styled from 'styled-components';
import CalendarInput from './CalenderInput';
import CheckBoxInput from './CheckBoxInput';
import DropdownInput from './DropdownInput';
import NormalInput from './NormalInput';

const InputBox = ({ list }) => {
  return (
    <InputBoxStyle>
      <label htmlFor="input">{list.label}</label>
      {list.inputList.map((type, index) => {
        switch (type.type) {
          case 'Calendar':
            return <CalendarInput type={type} key={index} />;
          case 'Dropdown':
            return <DropdownInput type={type} key={index} />;
          case 'CheckBox':
            return <CheckBoxInput type={type} key={index} />;
          default:
            return <NormalInput type={type} key={index} />;
        }
      })}
    </InputBoxStyle>
  );
};

export default InputBox;

const InputBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
