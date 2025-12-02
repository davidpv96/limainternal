'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PremiumReleasesProps {
  title: string;
  releases: Array<{
    id: string;
    thumbnail: string;
    title: string;
    duration: string;
    badge?: string;
  }>;
}

export default function PremiumReleases({ title, releases }: PremiumReleasesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % releases.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [releases.length, isDragging]);

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
        setActiveIndex((prev) => (prev + 1) % releases.length);
      } else {
        // Arrastre hacia la derecha - anterior
        setActiveIndex((prev) => (prev - 1 + releases.length) % releases.length);
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
        setActiveIndex((prev) => (prev + 1) % releases.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + releases.length) % releases.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };


  return (
    <section className="px-4 md:px-12 py-8 md:py-12 bg-black">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 lg:items-center">
        {/* Left side - Text */}
        <div className="w-full max-w-full lg:max-w-lg order-1 lg:order-none text-center lg:text-left">
          <span className="text-[#E6007E] text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-4 block">
            CONTENIDO FRESCO
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            <span>Nuevos </span><span className="text-[#E6007E]">Estrenos</span><br/>Cada Mes
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-full">
            Descubre nuevas producciones exclusivas regularmente. Nuestras actrices crean contenido premium constantemente para que siempre tengas algo fresco que explorar.
          </p>
        </div>
        
        {/* Right side - Carousel con efecto peek */}
        <div className="relative overflow-visible w-full order-2 lg:order-none">
          <div 
            className="relative h-[280px] md:h-[420px] flex items-center justify-center w-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {releases.map((release, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + releases.length) % releases.length;
              const isNext = index === (activeIndex + 1) % releases.length;
              
              // Solo mostrar las 3 cards visibles
              if (!isActive && !isPrev && !isNext) {
                return null;
              }
              
              let translateX = '0';
              let zIndex = 1;
              let scale = 1;
              
              if (isActive) {
                translateX = '-50%';
                zIndex = 10;
                scale = 1;
              } else if (isPrev) {
                translateX = '-105%';
                zIndex = 5;
                scale = 0.85;
              } else if (isNext) {
                translateX = '5%';
                zIndex = 5;
                scale = 0.85;
              }
              
              return (
                <div
                  key={release.id}
                  className={`absolute left-1/2 transition-all duration-500 ease-in-out w-[70%] md:w-[55%] max-w-full md:max-w-[550px] ${
                    !isActive ? 'cursor-pointer' : ''
                  }`}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex,
                  }}
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={release.thumbnail}
                      alt={release.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 650px"
                      priority={isActive}
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
