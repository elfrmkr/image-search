/* eslint-disable array-callback-return */
import React from 'react';
import ImageCard from './imageCard';
import './imageList.css';

const ImageList = (props) => {
  const images =  props.images.map(
        (image) => 
// eslint-disable-next-line jsx-a11y/alt-text
{
// assign the key on the root element that u r returning
    // eslint-disable-next-line jsx-a11y/alt-text
return  <ImageCard key = {image.id} image = {image} />});
    
return <div className = "image-list"> {images} </div>
};

export default ImageList;