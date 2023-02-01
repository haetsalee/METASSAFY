import styled from 'styled-components';

const RadioInput = ({ title, value, name, width, id }) => {
  console.log(title, value, name, width);
  return (
    <LabelStyle width={width} htmlFor={id}>
      {title}
      <RadioInputStyle type="radio" name={name} value={value} id={id} />
      <CustomRadioStyle></CustomRadioStyle>
    </LabelStyle>
  );
};

export default RadioInput;

const LabelStyle = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 30px;
`;

const CustomRadioStyle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #eee;

  &::after {
    content: '';
    position: absolute;
    /* 최초 display none */
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;

const RadioInputStyle = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked + ${CustomRadioStyle} {
    background-color: #2196f3;
  }

  &:checked + ${CustomRadioStyle}::after {
    display: block;
  }
`;
