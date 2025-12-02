'use client';

import Image from 'next/image';

interface VideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    duration: string;
    description?: string;
    modelContact?: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="w-full group cursor-pointer overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 176px, 208px"
          unoptimized
        />
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">
          {video.duration}
        </div>
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-white text-xl ml-1">▶</span>
          </div>
        </div>
      </div>
      
      {/* Info */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-white font-medium text-sm line-clamp-1 flex-1">
          {video.title}
        </h3>
        {/* Comprar Button */}
        <button 
          className="bg-black/40 text-white border-2 border-[#E6007E] shadow-[0_0_10px_rgba(230,0,126,0.4)] hover:bg-[#E6007E]/80 hover:shadow-[0_0_15px_rgba(230,0,126,0.6)] text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-200 flex-shrink-0"
          style={{ backgroundColor: 'transparent' }}
        >
          Comprar
        </button>
      </div>
      
      {video.description && (
        <p className="text-gray-500 text-xs line-clamp-1">{video.description}</p>
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
  );
}

