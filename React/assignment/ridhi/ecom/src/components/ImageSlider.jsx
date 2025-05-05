import React from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    "https://images.bewakoof.com/uploads/grid/app/1x1-DrinksOnPrints-Women-1746247989.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Trending-now-Bestseller-RM-1x1-Women-HC-BANNER--3--1746188246.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-pants-women--5--1746010291.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-Jeans-edit-Women--1--1746010950.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1X1-Starwars-DOTW-starwars-womeNn-1746186543.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Women-1x1-HC-Banner--3--1746248297.jpg"
  ];

  return (
    <div className="image-row">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`image-${index}`} className="row-img" />
      ))}
    </div>
  );
};

export default ImageSlider;
