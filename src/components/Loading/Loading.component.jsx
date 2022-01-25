import React from 'react';
import { LoadingDiv } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingDiv>
      <img src={process.env.PUBLIC_URL + '/rocket.gif'} alt=""></img>
    </LoadingDiv>
  );
};

export default Loading;
