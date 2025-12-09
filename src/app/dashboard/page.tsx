'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Importação dinâmica do Plotly para evitar problemas de SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function DashboardPage() {
  useEffect(() => {
    // Simular carregamento dos gráficos
    console.log('Dashboard carregado');
  }, []);

  const clientStatusData = [{
    type: 'pie' as const,
    labels: ['Ativos', 'Inativos'],
    values: [7234, 1313],
    marker: {
      colors: ['#22c55e', '#ef4444']
    },
    textinfo: 'label+percent',
    textposition: 'inside',
    hovertemplate: '<b>%{label}</b><br>%{value} clientes<br>%{percent}<extra></extra>'
  }];

  const clientStatusLayout = {
    showlegend: true,
    legend: { orientation: 'h', y: -0.1 },
    margin: { t: 20, r: 20, b: 60, l: 20 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff'
  };

  const partnerStatusData = [{
    type: 'pie' as const,
    labels: ['Ativos', 'Inativos'],
    values: [1089, 145],
    marker: {
      colors: ['#8b5cf6', '#f97316']
    },
    textinfo: 'label+percent',
    textposition: 'inside',
    hovertemplate: '<b>%{label}</b><br>%{value} parceiros<br>%{percent}<extra></extra>'
  }];

  const partnerStatusLayout = {
    showlegend: true,
    legend: { orientation: 'h', y: -0.1 },
    margin: { t: 20, r: 20, b: 60, l: 20 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff'
  };

  const clientsTimeData = [{
    type: 'bar' as const,
    x: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    y: [542, 623, 701, 789, 856, 934, 1023, 1156, 1289, 1423, 1567, 1644],
    marker: { color: '#2563eb' },
    hovertemplate: '<b>%{x}</b><br>%{y} novos clientes<extra></extra>'
  }];

  const clientsTimeLayout = {
    xaxis: { title: 'Mês' },
    yaxis: { title: 'Novos Clientes' },
    margin: { t: 20, r: 20, b: 60, l: 60 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff'
  };

  const partnersTimeData = [{
    type: 'bar' as const,
    x: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    y: [78, 89, 95, 103, 112, 125, 134, 147, 159, 168, 182, 192],
    marker: { color: '#8b5cf6' },
    hovertemplate: '<b>%{x}</b><br>%{y} novos parceiros<extra></extra>'
  }];

  const partnersTimeLayout = {
    xaxis: { title: 'Mês' },
    yaxis: { title: 'Novos Parceiros' },
    margin: { t: 20, r: 20, b: 60, l: 60 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff'
  };

  const revenueTimeData = [
    {
      type: 'bar' as const,
      name: 'Clientes',
      x: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      y: [185000, 198000, 215000, 223000, 234000, 247000, 256000, 268000, 279000, 289000, 301000, 312000],
      marker: { color: '#22c55e' },
      hovertemplate: '<b>Clientes - %{x}</b><br>R$ %{y:,.0f}<extra></extra>'
    },
    {
      type: 'bar' as const,
      name: 'Parceiros',
      x: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      y: [123000, 134000, 145000, 152000, 159000, 168000, 174000, 183000, 189000, 196000, 205000, 214000],
      marker: { color: '#8b5cf6' },
      hovertemplate: '<b>Parceiros - %{x}</b><br>R$ %{y:,.0f}<extra></extra>'
    }
  ];

  const revenueTimeLayout = {
    barmode: 'group',
    xaxis: { title: 'Mês' },
    yaxis: { title: 'Faturamento (R$)' },
    margin: { t: 20, r: 20, b: 60, l: 80 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    showlegend: true,
    legend: { orientation: 'h', y: 1.1 }
  };

  const mapData = [{
    type: 'choropleth' as const,
    locationmode: 'country names',
    locations: ['Brazil', 'Portugal', 'United States', 'Spain', 'France', 'Germany', 'United Kingdom', 'Italy'],
    z: [1845230, 1234567, 876543, 415006, 289000, 256000, 198000, 145000],
    text: ['Brasil', 'Portugal', 'Estados Unidos', 'Espanha', 'França', 'Alemanha', 'Reino Unido', 'Itália'],
    colorscale: [
      [0, '#dbeafe'],
      [0.2, '#93c5fd'],
      [0.4, '#60a5fa'],
      [0.6, '#3b82f6'],
      [0.8, '#2563eb'],
      [1, '#1e40af']
    ],
    autocolorscale: false,
    reversescale: false,
    marker: {
      line: {
        color: '#e5e7eb',
        width: 0.5
      }
    },
    colorbar: {
      title: 'Receita (R$)',
      thickness: 15,
      len: 0.7,
      x: 1.02
    },
    hovertemplate: '<b>%{text}</b><br>Receita: R$ %{z:,.0f}<extra></extra>'
  }];

  const mapLayout = {
    geo: {
      projection: {
        type: 'natural earth'
      },
      showland: true,
      landcolor: '#f9fafb',
      showocean: true,
      oceancolor: '#f0f9ff',
      showcountries: true,
      countrycolor: '#e5e7eb',
      showlakes: true,
      lakecolor: '#f0f9ff',
      bgcolor: '#ffffff'
    },
    margin: { t: 10, r: 20, b: 10, l: 20 },
    paper_bgcolor: '#ffffff',
    plot_bgcolor: '#ffffff'
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <i className="fa-solid fa-route text-2xl text-primary mr-3"></i>
          <span className="text-xl font-bold text-gray-800">Único Caminho</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-white bg-primary rounded-lg">
            <i className="fa-solid fa-chart-line mr-3"></i>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-users mr-3"></i>
            Clientes
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-handshake mr-3"></i>
            Parceiros
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-megaphone mr-3"></i>
            Anúncios
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-dollar-sign mr-3"></i>
            Receitas
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-chart-pie mr-3"></i>
            Relatórios
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-cog mr-3"></i>
            Configurações
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <Image src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Admin" width={40} height={40} className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">admin@unico.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Administrativo</h1>
            <p className="text-sm text-gray-500">Visão geral completa do sistema</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <i className="fa-solid fa-bell text-xl"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <i className="fa-solid fa-download mr-2"></i>
              Exportar
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* KPI Cards */}
          <section className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-users text-2xl text-blue-600"></i>
                </div>
                <span className="text-green-600 text-sm font-medium">+12.5%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total de Clientes</h3>
              <p className="text-3xl font-bold text-gray-800">8,547</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-handshake text-2xl text-purple-600"></i>
                </div>
                <span className="text-green-600 text-sm font-medium">+8.3%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Parceiros/Fornecedores</h3>
              <p className="text-3xl font-bold text-gray-800">1,234</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-megaphone text-2xl text-orange-600"></i>
                </div>
                <span className="text-green-600 text-sm font-medium">+18.7%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total de Anúncios</h3>
              <p className="text-3xl font-bold text-gray-800">3,892</p>
            </div>
          </section>

          {/* Country Stats */}
          <section className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <i className="fa-solid fa-globe text-primary mr-2"></i>
                Usuários por País
              </h3>
              <div className="space-y-4">
                {[
                  { country: '🇧🇷', name: 'Brasil', count: '4,523', percentage: '75%' },
                  { country: '🇵🇹', name: 'Portugal', count: '2,187', percentage: '45%' },
                  { country: '🇺🇸', name: 'Estados Unidos', count: '1,456', percentage: '30%' },
                  { country: '🇪🇸', name: 'Espanha', count: '892', percentage: '20%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.country}</span>
                      <span className="text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                        <div className={`w-[${item.percentage}] h-full bg-blue-600 rounded-full`}></div>
                      </div>
                      <span className="text-gray-800 font-semibold">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <i className="fa-solid fa-map-location-dot text-primary mr-2"></i>
                Fornecedores por País
              </h3>
              <div className="space-y-4">
                {[
                  { country: '🇧🇷', name: 'Brasil', count: '678', percentage: '65%' },
                  { country: '🇵🇹', name: 'Portugal', count: '423', percentage: '50%' },
                  { country: '🇪🇸', name: 'Espanha', count: '189', percentage: '25%' },
                  { country: '🇺🇸', name: 'Estados Unidos', count: '134', percentage: '15%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.country}</span>
                      <span className="text-gray-700 font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                        <div className={`w-[${item.percentage}] h-full bg-purple-600 rounded-full`}></div>
                      </div>
                      <span className="text-gray-800 font-semibold">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pie Charts */}
          <section className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Status dos Clientes</h3>
              <Plot
                data={clientStatusData}
                layout={clientStatusLayout}
                style={{ height: '350px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Status dos Parceiros</h3>
              <Plot
                data={partnerStatusData}
                layout={partnerStatusLayout}
                style={{ height: '350px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>
          </section>

          {/* Time Series Charts */}
          <section className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Clientes ao Longo do Tempo</h3>
              <Plot
                data={[clientsTimeData]}
                layout={clientsTimeLayout}
                style={{ height: '350px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Parceiros ao Longo do Tempo</h3>
              <Plot
                data={[partnersTimeData]}
                layout={partnersTimeLayout}
                style={{ height: '350px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>
          </section>

          {/* Revenue Cards */}
          <section className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-dollar-sign text-2xl"></i>
                </div>
                <i className="fa-solid fa-arrow-trend-up text-2xl"></i>
              </div>
              <h3 className="text-sm font-medium mb-1 opacity-90">Receita Total (Clientes)</h3>
              <p className="text-3xl font-bold">R$ 2.547.890</p>
              <p className="text-sm mt-2 opacity-80">+15.3% vs mês anterior</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-sack-dollar text-2xl"></i>
                </div>
                <i className="fa-solid fa-arrow-trend-up text-2xl"></i>
              </div>
              <h3 className="text-sm font-medium mb-1 opacity-90">Receita Total (Parceiros)</h3>
              <p className="text-3xl font-bold">R$ 1.823.456</p>
              <p className="text-sm mt-2 opacity-80">+11.7% vs mês anterior</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-2xl"></i>
                </div>
                <i className="fa-solid fa-arrow-trend-up text-2xl"></i>
              </div>
              <h3 className="text-sm font-medium mb-1 opacity-90">Receita Total</h3>
              <p className="text-3xl font-bold">R$ 4.371.346</p>
              <p className="text-sm mt-2 opacity-80">+13.8% vs mês anterior</p>
            </div>
          </section>

          {/* Revenue Map */}
          <section className="mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <i className="fa-solid fa-earth-americas text-primary mr-2"></i>
                Receita por País - Mapa Global
              </h3>
              <Plot
                data={mapData}
                layout={mapLayout}
                style={{ height: '500px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>
          </section>

          {/* Revenue Details */}
          <section className="mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <i className="fa-solid fa-earth-americas text-primary mr-2"></i>
                Receita Detalhada por País
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { flag: '🇧🇷', country: 'Brasil', amount: 'R$ 1.845.230', percentage: '+16.2%' },
                  { flag: '🇵🇹', country: 'Portugal', amount: 'R$ 1.234.567', percentage: '+12.8%' },
                  { flag: '🇺🇸', country: 'Estados Unidos', amount: 'R$ 876.543', percentage: '+9.4%' },
                  { flag: '🇪🇸', country: 'Espanha', amount: 'R$ 415.006', percentage: '+11.1%' }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br from-${index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'orange' : 'green'}-50 to-${index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'orange' : 'green'}-100 rounded-lg p-4 border border-${index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'orange' : 'green'}-200`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{item.flag}</span>
                      <i className="fa-solid fa-arrow-up text-green-600"></i>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{item.country}</p>
                    <p className="text-xl font-bold text-gray-800">{item.amount}</p>
                    <p className={`text-xs text-green-600 mt-1`}>{item.percentage}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Revenue Timeline */}
          <section className="mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Faturamento ao Longo do Tempo</h3>
              <Plot
                data={revenueTimeData}
                layout={revenueTimeLayout}
                style={{ height: '400px' }}
                config={{ responsive: true, displayModeBar: false, displaylogo: false }}
              />
            </div>
          </section>

          {/* Additional Metrics */}
          <section className="grid grid-cols-4 gap-6">
            {[
              { icon: 'fa-user-check', bgColor: 'indigo', title: 'Taxa de Conversão', value: '24.8%', change: '+3.2%' },
              { icon: 'fa-clock', bgColor: 'pink', title: 'Tempo Médio', value: '12.5 min', change: '-1.3 min' },
              { icon: 'fa-star', bgColor: 'yellow', title: 'Satisfação Média', value: '4.7/5.0', change: '+0.2' },
              { icon: 'fa-repeat', bgColor: 'teal', title: 'Taxa de Retenção', value: '87.3%', change: '+4.1%' }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className={`w-10 h-10 bg-${metric.bgColor}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`fa-solid ${metric.icon} text-${metric.bgColor}-600`}></i>
                </div>
                <h3 className={`text-gray-500 text-sm font-medium mb-1`}>{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                <p className={`text-xs mt-2 ${metric.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>{metric.change} vs anterior</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
