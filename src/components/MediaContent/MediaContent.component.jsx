import React, { useState } from 'react';
import useFetch from '../../utils/hooks/useFetch';
import { urlApiGetPictureDay } from '../../utils/nasa';
import Loading from '../Loading';
import { ContentDiv, StyledSpan } from './MediaContent.styles';

const MediaContent = ({ inputDate, data }) => {
  const [expandTextButton, setExpandTextButton] = useState(false);

  data = useFetch(urlApiGetPictureDay(inputDate)).data;
  console.log('data media content', data);

  const handleExpandButton = () => {
    console.log('expandTextButton', expandTextButton);
    setExpandTextButton((current) => !current);
  };

  if (!data?.url) {
    return <Loading />;
  }

  return (
    <ContentDiv>
      <h2> {data.title} </h2>
      <img src={data.url} alt="media-content" />
      <StyledSpan expandTextButton={expandTextButton}>
        {' '}
        {data.explanation}
      </StyledSpan>
      <button onClick={handleExpandButton}>
        {expandTextButton && <span>contract</span>}
        {!expandTextButton && <span>expand</span>}
      </button>
    </ContentDiv>
  );
};

export default MediaContent;
