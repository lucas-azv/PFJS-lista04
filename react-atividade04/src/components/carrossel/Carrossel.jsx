import React, { useState, useEffect } from 'react';
import './Carrossel.css';
import img1 from './images_carrossel/2148788829.jpg';
import img2 from './images_carrossel/pexels-fauxels-3184465.jpg';
import img3 from './images_carrossel/imagem_carrinho.png';

const images = [img1, img2, img3];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carrossel'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`carrossel-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Carrossel;
