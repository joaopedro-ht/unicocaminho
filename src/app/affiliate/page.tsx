'use client';

import { useState } from 'react';

export default function AffiliatePage() {
  const [copied, setCopied] = useState(false);

  const affiliateLink = 'ref.app.com/af7x9k2';
  const stats = {
    totalEarned: '€2,847.50',
    thisMonth: '€423.80',
    totalClicks: 15420,
    totalConversions: 234,
    commission: '15%'
  };

  const recentCommissions = [
    { date: '15/12/2024', amount: '€45.20', source: 'João Silva', status: 'Pago' },
    { date: '14/12/2024', amount: '€78.90', source: 'Maria Santos', status: 'Pago' },
    { date: '13/12/2024', amount: '€32.50', source: 'Pedro Costa', status: 'Pendente' },
    { date: '12/12/2024', amount: '€67.30', source: 'Ana Oliveira', status: 'Pago' }
  ];

  const marketingMaterials = [
    { name: 'Banner 728x90', type: 'Banner', size: '728x90px', downloads: 245 },
    { name: 'Banner 300x250', type: 'Banner', size: '300x250px', downloads: 189 },
    { name: 'Texto Promocional', type: 'Texto', size: 'Texto', downloads: 456 },
    { name: 'Email Template', type: 'Email', size: 'HTML', downloads: 123 }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${affiliateLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <button className="text-white">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <h1 className="text-white text-lg font-semibold">Programa de Afiliados</h1>
          <button className="text-white">
            <i className="fa-solid fa-bell text-xl"></i>
          </button>
        </div>

        {/* Affiliate Link Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-white/80 text-xs mb-2">Seu Link de Afiliado</p>
          <div className="flex items-center justify-between bg-white/20 rounded-lg px-3 py-2">
            <p className="text-white text-sm font-mono truncate">{affiliateLink}</p>
            <button
              onClick={handleCopyLink}
              className="bg-white text-indigo-600 px-3 py-1 rounded-md text-xs font-semibold ml-2 hover:bg-gray-100 transition-colors"
            >
              <i className="fa-solid fa-copy mr-1"></i>
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="px-4 py-6 -mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Ganho</p>
              <i className="fa-solid fa-euro-sign text-green-500"></i>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalEarned}</p>
            <p className="text-xs text-green-600 mt-1">+12.5% este mês</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Este Mês</p>
              <i className="fa-solid fa-calendar text-blue-500"></i>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.thisMonth}</p>
            <p className="text-xs text-blue-600 mt-1">+8.2% vs mês passado</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Cliques Totais</p>
              <i className="fa-solid fa-mouse-pointer text-purple-500"></i>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalClicks.toLocaleString()}</p>
            <p className="text-xs text-purple-600 mt-1">+15.3% esta semana</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Conversões</p>
              <i className="fa-solid fa-users text-orange-500"></i>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalConversions}</p>
            <p className="text-xs text-orange-600 mt-1">Taxa: {stats.commission}</p>
          </div>
        </div>
      </section>

      {/* Recent Commissions */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Comissões Recentes</h2>
        <div className="space-y-3">
          {recentCommissions.map((commission, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{commission.source}</p>
                  <p className="text-sm text-gray-600">{commission.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{commission.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    commission.status === 'Pago'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {commission.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Materiais de Marketing</h2>
        <div className="grid grid-cols-2 gap-3">
          {marketingMaterials.map((material, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-download text-indigo-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{material.name}</p>
                  <p className="text-xs text-gray-600">{material.type} • {material.size}</p>
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                Baixar ({material.downloads})
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Program Info */}
      <section className="px-4 mb-20">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Como Funciona</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</div>
              <div>
                <p className="font-medium text-gray-900">Compartilhe seu link</p>
                <p className="text-sm text-gray-600">Use seu link exclusivo em suas redes sociais e sites</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</div>
              <div>
                <p className="font-medium text-gray-900">Gere indicações</p>
                <p className="text-sm text-gray-600">Quando alguém se cadastra usando seu link, você ganha comissão</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">3</div>
              <div>
                <p className="font-medium text-gray-900">Receba pagamentos</p>
                <p className="text-sm text-gray-600">Pagamentos mensais automáticos na sua conta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center p-2">
            <i className="fas fa-home text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Início</span>
          </a>
          <a href="/services" className="flex flex-col items-center p-2">
            <i className="fas fa-search text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Buscar</span>
          </a>
          <a href="/affiliate" className="flex flex-col items-center p-2">
            <i className="fas fa-users text-indigo-600 text-lg"></i>
            <span className="text-xs text-indigo-600 mt-1">Afiliados</span>
          </a>
          <a href="/profile" className="flex flex-col items-center p-2">
            <i className="fas fa-user text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Perfil</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
