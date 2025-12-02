'use client';

import Image from 'next/image';

interface PremiumVideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    duration: string;
    description?: string;
  };
}

export default function PremiumVideoCard({ video }: PremiumVideoCardProps) {
  return (
    <div className="w-full group cursor-pointer overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300 group-hover:blur-sm"
          sizes="(max-width: 768px) 160px, 192px"
          unoptimized
          priority={false}
        />
        
        {/* EXCLUSIVO Badge */}
        <div className="absolute top-2 right-2 bg-[#E6007E] text-white text-xs font-bold px-2 py-1 rounded z-10">
          EXCLUSIVO
        </div>
        
        {/* Lock Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium z-10">
          {video.duration}
        </div>
      </div>
      
      {/* Info */}
      <h3 className="text-white font-medium text-sm line-clamp-2">
        {video.title}
      </h3>
      {video.description && (
        <p className="text-gray-500 text-xs mt-1">{video.description}</p>
      )}
    </div>
  );
}

