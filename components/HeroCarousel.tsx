'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface HeroCarouselProps {
  items: HeroItem[];
}

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    const threshold = 50; // mínimo de píxeles para cambiar de slide

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Arrastre hacia la izquierda - siguiente
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else {
        // Arrastre hacia la derecha - anterior
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div 
      className="relative w-full h-[55vh] md:h-[80vh] overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentItem.image}
          alt={currentItem.title}
          fill
          className="object-cover transition-all duration-700"
          priority
          unoptimized
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Navigation Arrows - más sutiles y elegantes - ocultas en móvil */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/50 hover:text-white/90 transition-all duration-300 hover:bg-black/20 rounded-full backdrop-blur-sm"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center text-white/50 hover:text-white/90 transition-all duration-300 hover:bg-black/20 rounded-full backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-16">
        <div className="max-w-[280px] md:max-w-sm">
          {/* Badge - rosa translúcido con borde */}
          <span className="inline-block border border-[#E6007E] bg-[#E6007E]/10 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-md text-[10px] md:text-xs font-semibold shadow-[0_0_10px_rgba(230,0,126,0.25)] mb-3 md:mb-4">
            {currentItem.subtitle}
          </span>
          
          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 break-words leading-tight">
            {currentItem.title}
          </h1>
          
          {/* Button - rosa con texto capitalizado */}
          <button className="bg-[#E6007E] hover:bg-[#C4006A] text-white font-semibold px-4 py-2 md:px-8 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#E6007E]/30 text-sm md:text-base">
            {currentItem.buttonText}
          </button>
        </div>
      </div>

      {/* Pagination - rectangular y más grande */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-[#E6007E]' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            } rounded-full`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
