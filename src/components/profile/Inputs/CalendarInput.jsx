import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const CalendarInput = ({ value, onChange }) => {
  // const [result, setResult] = useState(dayjs(value));
  const [result, setResult] = useState(
    dayjs('Thu Dec 30 1999 21:11:54 GMT+0900 (한국 표준시)')
  );

  const handleChange = (e) => {
    setResult(e);
    onChange(e);
  };
  // console.log(result);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePickerStyle
        label="생일"
        inputFormat="YYYY/MM/DD"
        value={result}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default CalendarInput;

const DesktopDatePickerStyle = styled(DesktopDatePicker)(({ theme }) => ({
  width: '11rem',

  '& input': {
    // backgroundColor: '#2196f3',
    padding: '0.7rem',
    fontSize: '0.9rem',
  },
}));
