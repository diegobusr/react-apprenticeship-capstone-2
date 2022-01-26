import React from 'react';
import { Image, ImageTitle } from './ImageView.styles';

const ImageView = ({ title, url }) => {
  return (
    <>
      <ImageTitle> {title} </ImageTitle>
      <Image src={url} alt="image-view" />
    </>
  );
};

export default ImageView;
