import React from 'react';

const ImageGalleryItem = ({image}) => (  
  <li className="ImageGalleryItem">
    <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
  </li> 
)

export default ImageGalleryItem;
