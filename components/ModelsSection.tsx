'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Model {
  id: string;
  image: string;
  name: string;
}

interface ModelsSectionProps {
  title: string;
  models: Model[];
}

export default function ModelsSection({ title, models }: ModelsSectionProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-4 md:px-12 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-4 gap-3 md:gap-0">
        <h2 className="text-xl md:text-3xl font-bold text-white">{title}</h2>
        
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
      
      {/* Models Carousel con Swiper - 4.5 cards */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1.2}
        slidesPerGroup={1}
        centeredSlides={true}
        className="models-swiper"
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
        {models.map((model) => (
          <SwiperSlide key={model.id}>
            <div className="w-full group cursor-pointer overflow-hidden">
              {/* Image - Vertical Rectangle */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                {/* Name inside image at bottom left - siempre visible, más grande */}
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3">
                  <h3 className="text-white font-bold text-base md:text-xl mb-1 md:mb-2 drop-shadow-lg">
                    {model.name}
                  </h3>
                  {/* Ver perfil - aparece en hover con mejor diseño */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1 text-white text-xs md:text-sm font-medium bg-[#E6007E]/90 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm shadow-lg">
                      Ver perfil
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
