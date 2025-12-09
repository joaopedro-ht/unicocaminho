'use client';

import { useState } from 'react';

export default function SocialPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Educação', 'Saúde', 'Meio Ambiente', 'Pobreza'];

  const projects = [
    {
      id: 1,
      title: 'Educação para Todos',
      category: 'Educação',
      country: 'Brasil',
      description: 'Programa de alfabetização digital para comunidades carentes',
      raised: 15420,
      goal: 25000,
      backers: 234,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png',
      daysLeft: 15
    },
    {
      id: 2,
      title: 'Saúde Comunitária',
      category: 'Saúde',
      country: 'Portugal',
      description: 'Clínica móvel para atendimento médico em regiões remotas',
      raised: 28300,
      goal: 35000,
      backers: 189,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png',
      daysLeft: 8
    },
    {
      id: 3,
      title: 'Reflorestamento Amazônico',
      category: 'Meio Ambiente',
      country: 'Brasil',
      description: 'Projeto de recuperação da floresta amazônica',
      raised: 45600,
      goal: 50000,
      backers: 567,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/70543600a1-c0aeb55aa8a602c7398e.png',
      daysLeft: 22
    },
    {
      id: 4,
      title: 'Combate à Fome',
      category: 'Pobreza',
      country: 'Angola',
      description: 'Distribuição de alimentos para famílias necessitadas',
      raised: 12200,
      goal: 20000,
      backers: 145,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png',
      daysLeft: 12
    }
  ];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Educação': return 'bg-blue-100 text-blue-800';
      case 'Saúde': return 'bg-green-100 text-green-800';
      case 'Meio Ambiente': return 'bg-emerald-100 text-emerald-800';
      case 'Pobreza': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCountryFlag = (country: string) => {
    switch (country) {
      case 'Brasil': return '🇧🇷';
      case 'Portugal': return '🇵🇹';
      case 'Angola': return '🇦🇴';
      default: return '🌍';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="fas fa-heart text-red-500 text-xl"></i>
            <h1 className="text-lg font-semibold text-gray-900">Projetos Sociais</h1>
          </div>
          <button className="p-2 text-gray-600">
            <i className="fas fa-search text-lg"></i>
          </button>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-white px-4 py-3 border-b">
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <main className="px-4 py-4 space-y-4 pb-20">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
                <span className="text-xs text-gray-500">{getCountryFlag(project.country)} {project.country}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Arrecadado</span>
                  <span className="font-semibold">€{project.raised.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(project.raised / project.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{Math.round((project.raised / project.goal) * 100)}% alcançado</span>
                  <span>Meta: €{project.goal.toLocaleString()}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div className="text-center">
                  <div className="font-semibold">{project.backers}</div>
                  <div className="text-xs">Apoiadores</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{project.daysLeft}</div>
                  <div className="text-xs">Dias restantes</div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                <i className="fas fa-heart mr-2"></i>
                Apoiar Projeto
              </button>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
            <p className="text-gray-500">Nenhum projeto encontrado nesta categoria</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <a href="/" className="flex flex-col items-center p-2">
            <i className="fas fa-home text-gray-600 text-lg"></i>
            <span className="text-xs text-gray-600 mt-1">Início</span>
          </a>
          <a href="/services" className="flex flex-col items-center p-2">
            <i className="fas fa-search text-primary text-lg"></i>
            <span className="text-xs text-primary mt-1">Buscar</span>
          </a>
          <a href="/social" className="flex flex-col items-center p-2">
            <i className="fas fa-heart text-red-500 text-lg"></i>
            <span className="text-xs text-red-500 mt-1">Social</span>
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
