import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { DateDiv } from './DatePicker.styles';

const DatePicker = ({ inputDate, setInputDate, setData }) => {
  // Date must be between Jun 16, 1995 and Jan 24, 2022.
  const genRandomDate = (start, end) => {
    let date = new Date(+start + Math.random() * (end - start));
    return format(date, 'yyyy-MM-dd');
  };
  useEffect(() => {
    let start = new Date(1995, 6, 16);
    let end = new Date();
    setInputDate(genRandomDate(start, end));
  }, []);

  const handleInputDateChange = (e) => {
    setInputDate(e.target.value);
    setData(null);
  };

  console.log('inputDate', inputDate);

  return (
    <DateDiv>
      <input
        id="inputDate"
        type="date"
        value={inputDate}
        min="1995-06-16"
        max={format(new Date(), 'yyyy-MM-dd')}
        onChange={handleInputDateChange}
      />
    </DateDiv>
  );
};

export default DatePicker;
