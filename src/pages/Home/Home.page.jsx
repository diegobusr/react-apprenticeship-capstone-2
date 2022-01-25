import React, { useState } from 'react';
import Title from '../../components/Title';
import DatePicker from '../../components/DatePicker';
import MediaContent from '../../components/MediaContent';
import { HomeDiv } from './Home.styles';

function HomePage({ data, setData }) {
  const [inputDate, setInputDate] = useState(new Date());
  return (
    <HomeDiv>
      <Title />
      <DatePicker
        inputDate={inputDate}
        setInputDate={setInputDate}
        setData={setData}
      />
      <MediaContent inputDate={inputDate} data={data} setData={setData} />
    </HomeDiv>
  );
}

export default HomePage;
