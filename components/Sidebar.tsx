'use client';

import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: 'home', label: 'Casa' },
    { id: 'content', icon: 'video', label: 'Contenido' },
    { id: 'premium', icon: 'star', label: 'Premium', isPremium: true },
    { id: 'about', icon: 'about', label: 'Sobre nosotros' },
    { id: 'contact', icon: 'contact', label: 'Contacto' },
    { id: 'blog', icon: 'blog', label: 'Blog' },
  ];

  const renderIcon = (icon: string, isActive: boolean) => {
    const iconClass = `w-6 h-6 transition-colors duration-200 ${
      isActive ? 'text-[#E6007E]' : 'text-white'
    }`;
    
    switch (icon) {
      case 'home':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        );
      case 'video':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
        );
      case 'star':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      case 'about':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        );
      case 'contact':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
      case 'blog':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside 
      suppressHydrationWarning
      className={`fixed top-0 left-0 h-full bg-black z-40 flex flex-col transition-all duration-300 ${
        isOpen ? 'w-64 px-4 pt-16 md:pt-20' : 'w-16 pt-12 md:pt-20'
      } ${isOpen ? 'flex' : 'hidden md:flex'}`}
    >
      <div className={`flex flex-col ${isOpen ? 'gap-1' : 'items-center gap-2'}`}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
            renderIcon={renderIcon}
            isOpen={isOpen}
          />
        ))}
      </div>
    </aside>
  );
}

function MenuItem({ 
  item, 
  isActive, 
  onClick, 
  renderIcon,
  isOpen
}: { 
  item: { id: string; icon: string; label: string; isPremium?: boolean };
  isActive: boolean;
  onClick: () => void;
  renderIcon: (icon: string, isActive: boolean) => React.ReactNode;
  isOpen: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center transition-all duration-200 rounded-lg ${
        isOpen ? 'w-full px-3 py-3 gap-3' : item.isPremium ? 'w-14 py-2 mx-auto flex-col justify-center items-center' : 'w-12 h-12 mx-auto flex-col justify-center items-center'
      } ${
        isActive || isHovered ? 'bg-gray-800/50' : ''
      }`}
    >
      {/* Icon y Premium Badge - badge arriba del icono cuando está colapsado */}
      {item.isPremium && !isOpen ? (
        <div className="flex flex-col items-center gap-0.5">
          <span 
            className="text-white text-[8px] font-bold px-2 py-0.5 rounded-full border border-[#E6007E]/50"
            style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(230,0,126,0.6) 100%)' }}
          >
            PREMIUM
          </span>
          <div className="flex-shrink-0 text-[#E6007E]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
        </div>
      ) : item.isPremium && isOpen ? (
        <div className="flex-shrink-0 text-[#E6007E]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
      ) : (
        <div className="flex-shrink-0">
          {renderIcon(item.icon, isActive)}
        </div>
      )}
      
      {/* Label - visible cuando está expandido */}
      {isOpen && (
        <span className={`text-sm font-medium ${item.isPremium ? 'text-[#E6007E]' : 'text-white'}`}>
          {item.label}
        </span>
      )}
      
      {/* Dot indicator for active state - solo cuando está colapsado y no es premium */}
      {!isOpen && !item.isPremium && (
        <div 
          className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-200 ${
            isActive ? 'bg-[#E6007E]' : 'bg-transparent'
          }`}
        />
      )}
      
      {/* Tooltip on hover - solo cuando está colapsado */}
      {!isOpen && (
        <span 
          className={`absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none transition-opacity duration-200 z-50 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.label}
        </span>
      )}
    </button>
  );
}
