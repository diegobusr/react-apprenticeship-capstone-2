import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { genRandomDate } from '../../utils/utils';
import { DateDiv } from './DatePicker.styles';

const DatePicker = ({ inputDate, setInputDate }) => {
  useEffect(() => {
    setInputDate(inputDate);
  }, [inputDate]);

  const handleInputDateChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleRandomInputDate = () => {
    let startDate = new Date(1995, 6, 16);
    let endDate = new Date();
    setInputDate(genRandomDate(startDate, endDate));
  };

  return (
    <DateDiv>
      <span> Select a date: </span>
      <input
        id="inputDate"
        type="date"
        value={inputDate}
        min="1995-06-16"
        max={format(new Date(), 'yyyy-MM-dd')}
        onChange={handleInputDateChange}
      />
      <button onClick={handleRandomInputDate}>random</button>
    </DateDiv>
  );
};

export default DatePicker;
