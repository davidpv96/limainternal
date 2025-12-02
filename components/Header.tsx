'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-black sticky top-0 z-40 overflow-x-hidden">
        {/* Menu hamburguesa / X - fijo solo en desktop, en móvil dentro del header sticky */}
        <button
          onClick={onMenuClick}
          className="absolute md:fixed top-0 left-0 text-white hover:text-brand-pink transition-colors flex items-center justify-center w-12 h-16 md:w-16 md:h-20 z-[60] bg-black"
          aria-label={isSidebarOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        
        <div className="flex items-center h-16 md:h-20 ml-12 md:ml-16">
          <div className="flex-1 flex items-center justify-between gap-2 md:gap-4 px-2 md:pl-0 md:pr-4 lg:px-4 h-full">
            {/* Logo */}
            <div className="flex items-center justify-center flex-shrink-0 h-full">
              <Image
                src="/logo.png?v=2"
                alt="LimaInternal"
                width={200}
                height={70}
                className="h-12 md:h-14 lg:h-[72px] w-auto object-contain"
                priority
                unoptimized
              />
            </div>

            {/* Center section: Search - responsive */}
            <div className="flex-1 max-w-2xl mx-2 md:mx-4 flex justify-end lg:justify-center">
              {/* Icono de lupa - solo visible en móvil */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-colors lg:hidden"
                aria-label="Abrir búsqueda"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="#E6007E"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              
              {/* Input de búsqueda - solo en desktop */}
              <div className="hidden lg:flex w-full max-w-2xl">
                <div
                  className={`relative rounded-xl transition-all duration-300 w-full ${
                    isSearchFocused
                      ? 'shadow-lg shadow-[#E6007E]/30'
                      : 'shadow-md shadow-black/20'
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Buscar videos"
                    className={`w-full bg-brand-darkGray/90 backdrop-blur-sm text-white placeholder-gray-400/70 rounded-xl px-5 py-3 pr-14 text-sm focus:outline-none transition-all duration-300 border ${
                      isSearchFocused
                        ? 'border-[#E6007E] border-opacity-100 shadow-[0_0_0_3px_rgba(230,0,126,0.1)]'
                        : 'border-[#E6007E] border-opacity-40 hover:border-opacity-70 hover:bg-brand-darkGray'
                    }`}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-[#E6007E] text-white rounded-lg px-4 py-2 hover:bg-[#E6007E]/90 transition-all duration-300 ${
                      isSearchFocused
                        ? 'shadow-lg shadow-[#E6007E]/40 scale-105'
                        : 'shadow-md shadow-[#E6007E]/20 hover:scale-105'
                    }`}
                    aria-label="Buscar"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right section: Ver Contenido button */}
            <div className="flex items-center flex-shrink-0">
              <button className="relative bg-gradient-to-r from-[#E6007E] to-[#C4006A] text-white font-bold rounded-lg px-2.5 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 hover:from-[#E6007E]/95 hover:to-[#C4006A]/95 transition-all duration-300 shadow-md shadow-[#E6007E]/30 hover:shadow-lg hover:shadow-[#E6007E]/40 hover:scale-105 active:scale-100 text-[9px] md:text-xs lg:text-sm overflow-hidden group whitespace-nowrap">
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                {/* Text with slight glow */}
                <span className="relative z-10 drop-shadow-sm">VER CONTENIDO</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenedor de búsqueda desplegable - solo en móvil */}
      {isSearchOpen && (
        <div className="fixed top-16 md:top-20 left-0 right-0 bg-white z-50 shadow-lg lg:hidden">
          <div className="px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar videos"
                  className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#E6007E] focus:bg-white transition-all"
                  autoFocus
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E6007E] text-white rounded-lg px-3 py-2 hover:bg-[#E6007E]/90 transition-colors"
                  aria-label="Buscar"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Cerrar búsqueda"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
