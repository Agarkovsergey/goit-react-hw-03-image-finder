import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (  
  <ul className="ImageGallery">
    {
      images.map(image => (
        <ImageGalleryItem image={image} key={image.id}/>
      ))
    }
  </ul>
)

export default ImageGallery;
