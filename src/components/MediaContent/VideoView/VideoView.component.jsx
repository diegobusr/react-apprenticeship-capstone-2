import React from 'react';
import { VideoTitle, EmbedVideo } from './VideoView.styles';

const VideoView = ({ title, url }) => {
  return (
    <>
      <VideoTitle> {title} </VideoTitle>
      <EmbedVideo title="Youtube embed" src={url} allowFullScreen />
    </>
  );
};

export default VideoView;
