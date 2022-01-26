import React, { useState } from 'react';
import useFetch from '../../utils/hooks/useFetch';
import { urlApiGetPictureDay } from '../../utils/nasa';
import Loading from '../Loading';
import ButtonText from './ButtonText';
import Explanation from './Explanation';
import { ContentDiv } from './MediaContent.styles';
import VideoView from './VideoView';
import ImageView from './ImageView';

const MediaContent = ({ setUrlBackground, inputDate }) => {
  const [expandTextButton, setExpandTextButton] = useState(false);

  const { data, loading, error } = useFetch(urlApiGetPictureDay(inputDate));
  // const { data, loading, error } = useFetch(urlApiGetPictureDay('2014-08-21'));
  const handleExpandButton = () => {
    setExpandTextButton((current) => !current);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <span> There was an error, please try again.</span>;
  }

  const { media_type, title, url, explanation } = data;
  setUrlBackground(url);

  if (media_type === 'video') {
    return (
      <ContentDiv>
        <VideoView title={title} url={url} />
        <Explanation
          expandTextButton={expandTextButton}
          explanation={explanation}
        />
        <ButtonText
          handleClick={handleExpandButton}
          expandTextButton={expandTextButton}
        />
      </ContentDiv>
    );
  } else {
    return (
      <ContentDiv>
        <ImageView url={url} title={title} />
        <Explanation
          expandTextButton={expandTextButton}
          explanation={explanation}
        />
        <ButtonText
          handleClick={handleExpandButton}
          expandTextButton={expandTextButton}
        />
      </ContentDiv>
    );
  }
};

export default MediaContent;
