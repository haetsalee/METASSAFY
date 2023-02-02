import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';

const DropdownInput = ({ data, width }) => {
  const options = data.data.map((item, index) => {
    return (
      <MenuItemStyle value={item} key={index}>
        <p>{item}</p>
      </MenuItemStyle>
    );
  });

  const [result, setResult] = useState('');
  const handleChange = (event) => {
    setResult(event.target.value);
  };

  return (
    <FormControlStyle variant="standard" sx={{ minWidth: 40, width: width }}>
      <LabelStyle id="demo-simple-select-autowidth-label">
        {data.label}
      </LabelStyle>
      <SelectStyle
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={result}
        onChange={handleChange}
        label={data.label}
        autoWidth
      >
        {options}
      </SelectStyle>
    </FormControlStyle>
  );
};

export default DropdownInput;

const FormControlStyle = styled(FormControl)(({ theme }) => ({
  fontSize: '0.6rem',
  margin: '0.2rem',
}));

const LabelStyle = styled(InputLabel)(({ theme }) => ({
  fontSize: '0.6rem',
  padding: '0 0.5rem',
}));

const SelectStyle = styled(Select)(({ theme }) => ({
  fontSize: '0.6rem',
}));

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  // fontSize: '0.6rem',
  minHeight: '2rem',
  padding: '0 0.5rem 0 0',
  margin: '0.3rem 0.6rem 0 0.6rem',
  display: 'flex',
  justifyContent: 'end',
  borderBottom: '1px solid #D9D9D9',
  fontSize: '0.6rem',
}));
