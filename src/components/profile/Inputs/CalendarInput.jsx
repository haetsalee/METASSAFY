import TextField from '@mui/material/TextField';
import { useState } from 'react';

const CalendarInput = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [saleStartDate, setSaleStartDate] = useState(today);

  return (
    <TextField
      id="date"
      label="생일"
      type="date"
      defaultValue={today}
      onChange={(e) => setSaleStartDate(e.target.value)}
      inputProps={{ min: today }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default CalendarInput;
