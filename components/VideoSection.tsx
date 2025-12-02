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
  modelContact?: string;
}

interface VideoSectionProps {
  title: string;
  videos: Video[];
}

export default function VideoSection({ title, videos }: VideoSectionProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-4 md:px-12 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-4 gap-3 md:gap-0">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 text-xs md:text-sm mt-1">Contenido exclusivo para adultos</p>
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
      
      {/* Videos Carousel con Swiper - 4.5 cards */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView="auto"
        className="video-swiper"
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 16,
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">
                  {video.duration}
                </div>
                {/* Play Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(230, 0, 126, 0.85)' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateX(1px)' }}>
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="flex items-start justify-between gap-2 md:gap-3 mt-2 md:mt-3 mb-1">
                <h3 className="text-white font-medium text-base md:text-lg line-clamp-1 flex-1">
                  {video.title}
                </h3>
                {/* Comprar Button */}
                <button 
                  className="bg-black text-white border-2 border-[#E6007E] hover:bg-[#E6007E] text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-lg shadow-[0_0_10px_rgba(230,0,126,0.5)] hover:shadow-[0_0_15px_rgba(230,0,126,0.7)] transition-all duration-200 flex-shrink-0"
                >
                  Comprar
                </button>
              </div>
              
              {video.description && (
                <p className="text-gray-500 text-xs md:text-sm line-clamp-1">{video.description}</p>
              )}
              
              {video.modelContact && (
                <p className="text-gray-600 text-xs flex items-center gap-1 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {video.modelContact}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
