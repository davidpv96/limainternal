'use client';

import Image from 'next/image';

interface ModelCardProps {
  model: {
    id: string;
    image: string;
    name: string;
  };
}

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <div className="w-full group cursor-pointer overflow-hidden">
      {/* Image - Vertical Rectangle */}
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
        <Image
          src={model.image}
          alt={model.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 128px, 160px"
          unoptimized
        />
        {/* Gradient overlay at bottom for name */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Name inside image at bottom */}
        <div className="absolute bottom-2 left-2 right-2">
          <h3 className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {model.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

