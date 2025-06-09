import React, { useEffect, useState } from 'react';
import './Banner.css';

const images = [
  '/assets/banner1.png',
  '/assets/banner2.png',
  '/assets/banner3.png',
  '/assets/banner4.png',
  '/assets/banner5.png',
  '/assets/banner6.png',
];

function Banner() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        let nextImage;
        do {
          nextImage = images[Math.floor(Math.random() * images.length)];
        } while (nextImage === currentImage);

        setCurrentImage(nextImage);
        setFade(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="banner-container">
      <img src={currentImage} alt="Banner" className={`banner-image ${fade ? 'fade' : ''}`} />
    </div>
  );
}

export default Banner;
