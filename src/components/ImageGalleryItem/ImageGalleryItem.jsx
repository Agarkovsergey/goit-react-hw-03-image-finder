import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem" onClick={onClick}>
    <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
    
  </li> 
)

export default ImageGalleryItem;
