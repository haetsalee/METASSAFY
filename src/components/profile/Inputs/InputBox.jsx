import styled from 'styled-components';
import RadioInput from './RadioInput';
import DropdownInput from './DropdownInput';
import NormalInput from './NormalInput';
import RowRadioButtonsGroup from './RowRadioButtonGroup';

const InputBox = ({ list, width }) => {
  return (
    <InputBoxStyle>
      <LabelStyle htmlFor="input">{list.label}</LabelStyle>
      <InputLineStyle>
        {/* {
         switch (list.type) {
            case 'Dropdown':
              return (
                <DropdownInput
                  key={index}
                  title={type.title}
                  data={type.data}
                />
              );
            case 'Radio':
              return (
                <RowRadioButtonsGroup
                  label={type.label} // 보여질 값
                  value={type.value} // 저장값
                  name={type.name} // 연결할 인풋들 이름 같게
                  id={type.id} // label 연결할 각각 인풋 아이디
                  key={index} // 배열용 키
                />
              );
            default:
              return <NormalInput type={type} key={index} />;
          } 
        } */}
      </InputLineStyle>
    </InputBoxStyle>
  );
};

export default InputBox;

const InputBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.8rem;
`;

const LabelStyle = styled.label`
  font-size: 0.8rem;
  color: #617485;
  margin-bottom: 0.2rem;
`;

const InputLineStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
