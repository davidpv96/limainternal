'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
  description?: string;
}

interface PremiumVideoSectionProps {
  title: string;
  videos: Video[];
}

export default function PremiumVideoSection({ title, videos }: PremiumVideoSectionProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-4 md:px-12 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-2 gap-3 md:gap-0">
        <div className="flex items-center gap-2 md:gap-3">
          <h2 className="text-xl md:text-3xl font-bold text-white">{title}</h2>
          <span className="bg-[#E6007E] text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1 md:gap-1.5">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            PREMIUM
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600/50 border border-gray-400/30 text-gray-400 hover:text-gray-300 hover:bg-gray-600/60 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600/50 border border-gray-400/30 text-gray-400 hover:text-gray-300 hover:bg-gray-600/60 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a href="#" className="text-[#E6007E] text-xs md:text-sm font-medium hover:underline ml-2">
            Explorar más →
          </a>
        </div>
      </div>
      
      <p className="text-gray-400 text-xs md:text-sm mb-4">Los videos más populares y recientes de nuestras modelos</p>
      
      {/* Videos Carousel con Swiper - 4.5 cards */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1.2}
        slidesPerGroup={1}
        centeredSlides={true}
        className="premium-swiper"
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 16,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3.5,
            slidesPerGroup: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4.5,
            slidesPerGroup: 4,
            spaceBetween: 16,
          },
        }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="w-full group cursor-pointer overflow-hidden">
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 group-hover:blur-sm"
                  unoptimized
                  priority={false}
                />
                
                {/* EXCLUSIVO Badge - esquina superior derecha */}
                <div className="absolute top-2 right-2 bg-[#E6007E] text-white text-xs font-bold px-2 py-1 rounded z-30">
                  EXCLUSIVO
                </div>
                
                {/* Lock Icon - centrado */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium z-30">
                  {video.duration}
                </div>
                
                {/* Play Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(230, 0, 126, 0.85)' }}
                  >
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <h3 className="text-white font-medium text-base md:text-lg line-clamp-2">
                {video.title}
              </h3>
              {video.description && (
                <p className="text-gray-500 text-xs md:text-sm mt-1">{video.description}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
