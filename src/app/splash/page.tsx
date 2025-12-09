'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white relative z-10 px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl">
            <i className="fas fa-route text-4xl text-blue-600"></i>
          </div>
          <h1 className="text-4xl font-bold mb-2">Único Caminho</h1>
          <p className="text-xl opacity-90">Conectando pessoas e oportunidades globais</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <i className="fas fa-globe text-3xl mb-3"></i>
            <h3 className="font-semibold mb-2">Global</h3>
            <p className="text-sm opacity-80">Conecte-se com pessoas ao redor do mundo</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <i className="fas fa-handshake text-3xl mb-3"></i>
            <h3 className="font-semibold mb-2">Confiável</h3>
            <p className="text-sm opacity-80">Plataforma segura e verificada</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <i className="fas fa-rocket text-3xl mb-3"></i>
            <h3 className="font-semibold mb-2">Rápido</h3>
            <p className="text-sm opacity-80">Encontre o que precisa rapidamente</p>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-sm opacity-75">
          <p>Carregando sua experiência...</p>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm">
        <p>Único Caminho © 2024</p>
      </div>
    </div>
  );
}
