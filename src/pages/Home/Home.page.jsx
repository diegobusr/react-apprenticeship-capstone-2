import React, { useState } from 'react';
import { format } from 'date-fns';
import Title from '../../components/Title';
import DatePicker from '../../components/DatePicker';
import MediaContent from '../../components/MediaContent';
import { HomeDiv } from './Home.styles';

function HomePage({ setUrlBackground }) {
  const [inputDate, setInputDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  return (
    <HomeDiv>
      <Title />
      <DatePicker inputDate={inputDate} setInputDate={setInputDate} />
      <MediaContent inputDate={inputDate} setUrlBackground={setUrlBackground} />
    </HomeDiv>
  );
}

export default HomePage;
