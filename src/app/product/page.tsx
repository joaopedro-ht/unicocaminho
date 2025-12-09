'use client';

import Image from 'next/image';

export default function ProductPage() {
  const product = {
    title: 'Apartamento de Luxo em Copacabana',
    category: 'Imóveis',
    subcategory: 'Apartamentos',
    price: '€2.500/mês',
    location: 'Rio de Janeiro, Brasil',
    description: 'Apartamento de luxo com vista para o mar, 3 quartos, 2 banheiros, cozinha americana, sala de estar ampla e varanda gourmet.',
    features: [
      '3 quartos',
      '2 banheiros',
      'Vista para o mar',
      'Varanda gourmet',
      'Cozinha americana',
      'Sala de estar ampla',
      'Condomínio completo',
      'Estacionamento privativo'
    ],
    images: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png'
    ]
  };

  const partner = {
    name: 'Imobiliária Premium',
    verified: true,
    rating: 4.8,
    reviews: 156,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <button className="p-2">
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </button>
          <div className="flex space-x-3">
            <button className="p-2">
              <i className="fa-regular fa-heart text-xl"></i>
            </button>
            <button className="p-2">
              <i className="fa-solid fa-share text-xl"></i>
            </button>
            <button className="p-2">
              <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="relative">
        <div className="relative h-80 bg-neutral-400 flex items-center justify-center">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-neutral-500 text-black px-3 py-1 rounded-full text-sm">Premium</span>
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex space-x-2 p-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-20 h-20 bg-neutral-300 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Foto ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Product Info */}
      <section className="p-4 border-b border-neutral-200">
        <div className="mb-3">
          <span className="text-sm text-neutral-500">{product.category} &gt; {product.subcategory}</span>
        </div>
        <h1 className="text-2xl mb-3">{product.title}</h1>

        {/* Partner Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={partner.avatar}
            alt={partner.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">{partner.name}</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-neutral-500">{partner.verified ? 'Parceiro Verificado' : 'Parceiro'}</span>
              <div className="flex items-center space-x-1">
                <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                <span className="text-sm text-neutral-700">{partner.rating}</span>
                <span className="text-sm text-neutral-500">({partner.reviews} avaliações)</span>
              </div>
            </div>
          </div>
          <button className="text-primary">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Price and Location */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold text-primary">{product.price}</p>
            <div className="flex items-center text-sm text-neutral-600 mt-1">
              <i className="fa-solid fa-map-marker-alt mr-1"></i>
              {product.location}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="p-4 border-b border-neutral-200">
        <h2 className="text-lg font-semibold mb-3">Descrição</h2>
        <p className="text-neutral-700 leading-relaxed">{product.description}</p>
      </section>

      {/* Features */}
      <section className="p-4 border-b border-neutral-200">
        <h2 className="text-lg font-semibold mb-3">Características</h2>
        <div className="grid grid-cols-2 gap-3">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <i className="fa-solid fa-check text-green-500 text-sm"></i>
              <span className="text-sm text-neutral-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Actions */}
      <section className="p-4 space-y-3">
        <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          <i className="fa-solid fa-phone mr-2"></i>
          Ligar
        </button>

        <button className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
          <i className="fa-brands fa-whatsapp mr-2"></i>
          WhatsApp
        </button>

        <button className="w-full border-2 border-neutral-300 text-neutral-700 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors">
          <i className="fa-solid fa-envelope mr-2"></i>
          Enviar Mensagem
        </button>
      </section>

      {/* Similar Products */}
      <section className="p-4 border-t border-neutral-200 mt-4">
        <h2 className="text-lg font-semibold mb-4">Produtos Similares</h2>
        <div className="space-y-3">
          {[
            {
              title: 'Apartamento Vista Mar',
              price: '€3.200/mês',
              location: 'Rio de Janeiro',
              image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png'
            },
            {
              title: 'Cobertura Duplex',
              price: '€4.500/mês',
              location: 'São Paulo',
              image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png'
            }
          ].map((similar, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden">
              <div className="w-20 h-20 relative">
                <Image
                  src={similar.image}
                  alt={similar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-3">
                <h3 className="font-medium text-sm mb-1">{similar.title}</h3>
                <p className="text-primary font-semibold text-sm">{similar.price}</p>
                <div className="flex items-center text-xs text-neutral-500 mt-1">
                  <i className="fa-solid fa-map-marker-alt mr-1"></i>
                  {similar.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
