'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const categories = [
    {
      title: 'Imóveis',
      icon: 'fa-building',
      color: 'bg-blue-500',
      description: 'Apartamentos, casas e imóveis comerciais',
      services: ['Apartamentos', 'Casas', 'Terrenos', 'Comerciais'],
      href: '/services/real-estate'
    },
    {
      title: 'Veículos',
      icon: 'fa-car',
      color: 'bg-green-500',
      description: 'Carros, motos e veículos comerciais',
      services: ['Carros', 'Motos', 'Caminhões', 'Utilitários'],
      href: '/services/vehicles'
    },
    {
      title: 'Serviços',
      icon: 'fa-tools',
      color: 'bg-orange-500',
      description: 'Profissionais e serviços especializados',
      services: ['Eletricistas', 'Encanadores', 'Pintores', 'Marceneiros'],
      href: '/services/professionals'
    },
    {
      title: 'Tecnologia',
      icon: 'fa-laptop',
      color: 'bg-purple-500',
      description: 'Eletrônicos e equipamentos tecnológicos',
      services: ['Celulares', 'Computadores', 'Games', 'Acessórios'],
      href: '/services/technology'
    },
    {
      title: 'Moda & Beleza',
      icon: 'fa-shirt',
      color: 'bg-pink-500',
      description: 'Roupas, acessórios e produtos de beleza',
      services: ['Roupas', 'Calçados', 'Cosméticos', 'Acessórios'],
      href: '/services/fashion'
    },
    {
      title: 'Casa & Decoração',
      icon: 'fa-home',
      color: 'bg-indigo-500',
      description: 'Móveis, decoração e artigos para casa',
      services: ['Móveis', 'Eletrodomésticos', 'Decoração', 'Jardinagem'],
      href: '/services/home'
    },
    {
      title: 'Esportes & Lazer',
      icon: 'fa-futbol',
      color: 'bg-red-500',
      description: 'Equipamentos esportivos e lazer',
      services: ['Bicicletas', 'Equipamentos', 'Fitness', 'Camping'],
      href: '/services/sports'
    },
    {
      title: 'Alimentação',
      icon: 'fa-utensils',
      color: 'bg-yellow-500',
      description: 'Restaurantes, delivery e produtos gourmet',
      services: ['Restaurantes', 'Delivery', 'Produtos', 'Bebidas'],
      href: '/services/food'
    }
  ];

  const featuredServices = [
    {
      title: 'Apartamento de Luxo em Copacabana',
      price: '€2.500/mês',
      location: 'Rio de Janeiro, Brasil',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png',
      badge: 'Premium',
      href: '/product/1'
    },
    {
      title: 'BMW X3 2023',
      price: '€45.000',
      location: 'Lisboa, Portugal',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png',
      badge: 'Novo',
      href: '/product/2'
    },
    {
      title: 'Serviço de Pintura Residencial',
      price: 'A partir de €50',
      location: 'São Paulo, Brasil',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png',
      badge: 'Verificado',
      href: '/product/3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <i className="fas fa-route text-primary text-xl"></i>
            <h1 className="text-lg font-semibold text-gray-900">Único Caminho</h1>
          </Link>
          <div className="flex items-center space-x-2">
            <button className="p-2">
              <i className="fas fa-search text-gray-600"></i>
            </button>
            <button className="p-2">
              <i className="fas fa-bell text-gray-600"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {/* Categories Grid */}
        <section className="p-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Categorias</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-3`}>
                  <i className={`fas ${category.icon} text-white text-lg`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <div className="flex flex-wrap gap-1">
                  {category.services.slice(0, 2).map((service) => (
                    <span key={service} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                  {category.services.length > 2 && (
                    <span className="text-xs text-gray-500">+{category.services.length - 2}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Services */}
        <section className="px-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Em Destaque</h2>
          <div className="space-y-4">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow block"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-lg font-bold text-primary mb-1">{service.price}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {service.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/social"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 text-center"
            >
              <i className="fas fa-heart text-2xl mb-2"></i>
              <p className="font-semibold">Projetos Sociais</p>
            </Link>
            <Link
              href="/affiliate"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4 text-center"
            >
              <i className="fas fa-users text-2xl mb-2"></i>
              <p className="font-semibold">Afiliados</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center p-2">
            <i className="fas fa-home text-primary text-lg"></i>
            <span className="text-xs text-primary mt-1">Início</span>
          </Link>
          <Link href="/services" className="flex flex-col items-center p-2">
            <i className="fas fa-search text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Buscar</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <i className="fas fa-user text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Perfil</span>
          </Link>
          <Link href="/pages" className="flex flex-col items-center p-2">
            <i className="fas fa-list text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Mais</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
