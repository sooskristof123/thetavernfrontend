"use client";
import { useState, useEffect } from "react";
import Button from "./button";
import styles from "./slider.module.css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    date: "2025. június 1-3.",
    location: "Ludovika Aréna, Budapest",
    title: "Magyar Streamer Bajnokság",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/banner1.jpg"
  },
  {
    id: 2,
    image: "/images/placeholder.png"
  },
  {
    id: 3,
    date: "2025. október 20-22.",
    title: "WoW Online Bajnokság",
    description: "World of Warcraft játékosok számára szervezett nagy esemény, ahol a legerősebb karakterek találkoznak...",
    image: "/images/wow_event.png"
  }
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Function to get card position class
  const getCardPosition = (slideIndex) => {
    if (slideIndex === currentSlide) {
      return styles.slider_card__center;
    } else if (slideIndex === (currentSlide - 1 + slides.length) % slides.length) {
      return styles.slider_card__left;
    } else if (slideIndex === (currentSlide + 1) % slides.length) {
      return styles.slider_card__right;
    } else {
      return styles.slider_card__hidden;
    }
  };

  // Handle card click
  const handleCardClick = (slideIndex) => {
    if (slideIndex !== currentSlide) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div className={styles.slider}>
      <div 
        className={styles.slider_container}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.slider_track}>
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`${styles.slider_card} ${getCardPosition(index)}`}
              style={{ '--slide-image': `url(${slide.image})` }}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.slider_card__content}>
                <p className={styles.slider_card__content__colored}>{slide.date}</p>
                <p className={styles.slider_card__content__colored}>{slide.location}</p>
                <h3 className={styles.slider_card__content__title}>{slide.title}</h3>
                <p className={styles.slider_card__content__description}>{slide.description}</p>
              </div>
              <div className={styles.slider_card__button__container}>
                <Button animated={true} label="Részletek" variant="secondary"/>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Container with Buttons and Dots */}
      <div className={styles.slider_navigation}>
        <button 
          className={`${styles.slider_nav} ${styles.slider_nav__prev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <Image src="/icons/arrow.svg" alt="Previous" width={5.65} height={10} />
        </button>
        
        {/* Dots Indicator */}
        <div className={styles.slider_dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.slider_dot} ${index === currentSlide ? styles.slider_dot__active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className={`${styles.slider_nav} ${styles.slider_nav__next}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <Image src="/icons/arrow.svg" alt="Previous" width={5.65} height={10} />
        </button>
      </div>
      
      {/* Mobile-only dots */}
      <div className={styles.slider_dots_mobile}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.slider_dot} ${index === currentSlide ? styles.slider_dot__active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
