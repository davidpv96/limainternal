'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroCarousel from '@/components/HeroCarousel';
import VideoSection from '@/components/VideoSection';
import PremiumVideoSection from '@/components/PremiumVideoSection';
import ModelsSection from '@/components/ModelsSection';
import PremiumReleases from '@/components/PremiumReleases';
import Footer from '@/components/Footer';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Datos de ejemplo para el carousel principal
  const heroItems = [
    {
      id: '1',
      image: '/hero-1.jpg',
      title: 'El Chibolo +18',
      subtitle: 'CAPITULO 3: REVIENTA GLOBOS',
      buttonText: 'Mira Ahora',
    },
    {
      id: '2',
      image: '/hero-2.jpg',
      title: 'Actrices Exclusivas',
      subtitle: 'SOLO PARA TI',
      buttonText: 'Ver Todas',
    },
    {
      id: '3',
      image: '/hero-3.jpg',
      title: 'Pervirtiendo a mis Hijastros',
      subtitle: 'ESTRENO',
      buttonText: 'Ver Ahora',
    },
  ];

  // Datos de ejemplo para videos generales
  const generalVideos = [
    {
      id: '1',
      thumbnail: '/contenido/video-1.jpg',
      title: 'El Chibolo +18',
      duration: '39:22',
      description: 'Contenido exclusivo para adultos',
      modelContact: 'contacto@modelo.com',
    },
    {
      id: '2',
      thumbnail: '/contenido/video-2.jpg',
      title: 'Squid Game XXX',
      duration: '37:28',
      description: 'Parodia exclusiva',
    },
    {
      id: '3',
      thumbnail: '/contenido/video-3.jpg',
      title: 'Mano Dura',
      duration: '41:15',
      description: 'Nuevo contenido',
    },
    {
      id: '4',
      thumbnail: '/contenido/video-4.jpg',
      title: 'Pervirtiendo a mis Hijastros',
      duration: '1:09:32',
      description: 'Contenido premium',
    },
    {
      id: '5',
      thumbnail: '/contenido/video-5.jpg',
      title: 'También me gusta eso',
      duration: '38:15',
      description: 'Con Cata Sanchez',
    },
    {
      id: '6',
      thumbnail: '/contenido/video-6.jpg',
      title: 'Chicago Balls vs Lakers X',
      duration: '39:26',
      description: 'Con Anaí Loves',
    },
    {
      id: '7',
      thumbnail: '/contenido/video-7.jpg',
      title: 'Inkapillada Jorgito',
      duration: '40:42',
      description: 'Contenido exclusivo',
    },
    {
      id: '8',
      thumbnail: '/contenido/video-8.jpg',
      title: 'Mi Primer Video Porno',
      duration: '32:51',
      description: 'Estreno',
    },
  ];

  // Datos de ejemplo para videos premium
  const premiumVideos = [
    {
      id: 'p1',
      thumbnail: '/exclusivo/premium-1.jpg',
      title: 'Contenido Premium Exclusivo 1',
      duration: '50:00',
      description: 'Contenido exclusivo premium',
    },
    {
      id: 'p2',
      thumbnail: '/exclusivo/premium-2.jpg',
      title: 'Contenido Premium Exclusivo 2',
      duration: '48:30',
      description: 'Contenido exclusivo premium',
    },
    {
      id: 'p3',
      thumbnail: '/exclusivo/premium-3.jpg',
      title: 'Contenido Premium Exclusivo 3',
      duration: '52:15',
      description: 'Contenido exclusivo premium',
    },
    {
      id: 'p4',
      thumbnail: '/exclusivo/premium-4.jpg',
      title: 'Contenido Premium Exclusivo 4',
      duration: '46:20',
      description: 'Contenido exclusivo premium',
    },
    {
      id: 'p5',
      thumbnail: '/exclusivo/premium-5.jpg',
      title: 'Contenido Premium Exclusivo 5',
      duration: '49:10',
      description: 'Contenido exclusivo premium',
    },
    {
      id: 'p6',
      thumbnail: '/exclusivo/premium-6.jpg',
      title: 'Contenido Premium Exclusivo 6',
      duration: '51:30',
      description: 'Contenido exclusivo premium',
    },
  ];

  // Datos de ejemplo para modelos
  const models = [
    {
      id: 'm1',
      image: '/modelos/modelo-1.jpg',
      name: 'Victoria Camargo',
    },
    {
      id: 'm2',
      image: '/modelos/modelo-2.jpg',
      name: 'Lisa Bullock',
    },
    {
      id: 'm3',
      image: '/modelos/modelo-3.jpg',
      name: 'Vitoria Beatriz',
    },
    {
      id: 'm4',
      image: '/modelos/modelo-4.jpg',
      name: 'Verito Aguas',
    },
    {
      id: 'm5',
      image: '/modelos/modelo-5.jpg',
      name: 'Pistolinha',
    },
    {
      id: 'm6',
      image: '/modelos/modelo-6.jpg',
      name: 'Patty Cherry',
    },
    {
      id: 'm7',
      image: '/modelos/modelo-7.jpg',
      name: 'Gati Diosa',
    },
    {
      id: 'm8',
      image: '/modelos/modelo-8.jpg',
      name: 'Daniela Andrea',
    },
  ];

  // Datos de ejemplo para estrenos
  const releases = [
    {
      id: 'r1',
      thumbnail: '/hero-1.jpg',
      title: 'Pervirtiendo a mis Hijastros',
      duration: '1:09:32',
      badge: 'NUEVO',
    },
    {
      id: 'r2',
      thumbnail: '/hero-2.jpg',
      title: 'Mano Dura',
      duration: '41:15',
      badge: 'EXCLUSIVO',
    },
    {
      id: 'r3',
      thumbnail: '/hero-3.jpg',
      title: 'Chibolo +18: Capitulo III',
      duration: '40:44',
      badge: 'PREMIUM',
    },
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-black overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Overlay para cerrar sidebar al hacer clic fuera - solo en móvil */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64 ml-0' : 'md:ml-16 ml-0'}`}>
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />
        
        <main className="flex-1 w-full overflow-x-hidden">
          {/* Hero Carousel */}
          <HeroCarousel items={heroItems} />

          {/* Contenido General */}
          <div className="py-8 bg-black">
            <VideoSection title="Contenido General" videos={generalVideos} />
            
            {/* Contenido Exclusivo */}
            <PremiumVideoSection
              title="Contenido Exclusivo"
              videos={premiumVideos}
            />

            {/* Nuestras Modelos */}
            <ModelsSection title="Nuestras Modelos" models={models} />

            {/* Estrenos Premium */}
            <PremiumReleases title="Estrenos Premium" releases={releases} />
        </div>

          {/* Footer */}
          <Footer />
      </main>
      </div>
    </div>
  );
}
