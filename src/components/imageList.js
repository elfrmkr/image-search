/* eslint-disable array-callback-return */
import React from 'react';

const ImageList = (props) => {
  const images =  props.images.map(
        ({description,id, urls}) => 
// eslint-disable-next-line jsx-a11y/alt-text
{
// assign the key on the root element that u r returning
    // eslint-disable-next-line jsx-a11y/alt-text
return  <img alt = {description} key = {id} src = {urls.regular}/>});
    
return <div> {images} </div>
};

export default ImageList;