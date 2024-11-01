"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider = () => {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg']; // Ensure these images exist in your public folder
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className={styles.slider}>
      <button className={`${styles.prev}`} onClick={handlePrev}>❮</button>
      <div className={styles.imageWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className={styles.imageContainer} key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill" // Use layout fill to cover the container fully
              className={styles.image}
              objectFit="cover" // Ensure the image covers the entire container
            />
          </div>
        ))}
      </div>
      <button className={`${styles.next}`} onClick={handleNext}>❯</button>
      
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`} 
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
