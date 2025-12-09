import Link from 'next/link';

export default function AllPages() {
  const pages = [
    {
      title: 'Página Inicial',
      description: 'Menu principal com navegação para todas as seções',
      href: '/',
      icon: 'fa-home',
      color: 'bg-gray-600',
      category: 'Navegação'
    },
    {
      title: 'Todas as Páginas',
      description: 'Listagem completa e organizada de todas as páginas',
      href: '/pages',
      icon: 'fa-list',
      color: 'bg-indigo-600',
      category: 'Navegação'
    },
    {
      title: 'Dashboard Administrativo',
      description: 'KPIs, gráficos e métricas do sistema',
      href: '/dashboard',
      icon: 'fa-chart-line',
      color: 'bg-blue-600',
      category: 'Administração'
    },
    {
      title: 'Login / Registro',
      description: 'Autenticação e cadastro de usuários',
      href: '/auth/login',
      icon: 'fa-user',
      color: 'bg-green-600',
      category: 'Autenticação'
    },
    {
      title: 'Perfil do Usuário',
      description: 'Informações pessoais e configurações',
      href: '/profile',
      icon: 'fa-user-circle',
      color: 'bg-purple-600',
      category: 'Usuário'
    },
    {
      title: 'Métodos de Pagamento',
      description: 'Seleção e processamento de pagamentos',
      href: '/payment/methods',
      icon: 'fa-credit-card',
      color: 'bg-orange-600',
      category: 'Pagamentos'
    },
    {
      title: 'Serviços & Produtos',
      description: 'Marketplace com categorias de serviços e produtos',
      href: '/services',
      icon: 'fa-shopping-bag',
      color: 'bg-emerald-600',
      category: 'Marketplace'
    },
    {
      title: 'Projetos Sociais',
      description: 'Plataforma de arrecadação para projetos beneficentes',
      href: '/social',
      icon: 'fa-heart',
      color: 'bg-red-600',
      category: 'Social'
    },
    {
      title: 'Assinaturas',
      description: 'Planos de assinatura e gerenciamento de cobrança',
      href: '/subscriptions',
      icon: 'fa-crown',
      color: 'bg-yellow-600',
      category: 'Assinaturas'
    },
    {
      title: 'Programa de Afiliados',
      description: 'Sistema de indicação e comissões',
      href: '/affiliate',
      icon: 'fa-users',
      color: 'bg-pink-600',
      category: 'Afiliados'
    },
    {
      title: 'Detalhes do Produto',
      description: 'Página de exemplo de produto/serviço',
      href: '/product',
      icon: 'fa-tag',
      color: 'bg-cyan-600',
      category: 'Produtos'
    },
    {
      title: 'Splash Screen',
      description: 'Tela inicial elegante com animações',
      href: '/splash',
      icon: 'fa-star',
      color: 'bg-gradient-to-r from-blue-600 to-purple-600',
      category: 'Interface'
    }
  ];

  const categories = ['Navegação', 'Administração', 'Autenticação', 'Usuário', 'Pagamentos', 'Marketplace', 'Social', 'Assinaturas', 'Afiliados', 'Produtos', 'Interface'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-arrow-left text-lg"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Todas as Páginas</h1>
                <p className="text-sm text-gray-600">Navegação completa do projeto Único Caminho</p>
              </div>
            </div>
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-route text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {categories.map((category) => (
            <section key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className={`fa-solid ${
                  category === 'Navegação' ? 'fa-home' :
                  category === 'Administração' ? 'fa-chart-line' :
                  category === 'Autenticação' ? 'fa-user' :
                  category === 'Usuário' ? 'fa-user-circle' :
                  'fa-credit-card'
                } mr-2 text-gray-600`}></i>
                {category}
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pages
                  .filter(page => page.category === category)
                  .map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 hover:shadow-md border border-gray-200 hover:border-gray-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 ${page.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <i className={`fa-solid ${page.icon} text-white text-sm`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 truncate">
                            {page.title}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {page.description}
                          </p>
                          <div className="mt-2 text-xs text-gray-500 font-mono">
                            {page.href}
                          </div>
                        </div>
                        <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Estatísticas do Projeto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{pages.length}</div>
              <div className="text-sm text-gray-600">Páginas Totais</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length}</div>
              <div className="text-sm text-gray-600">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Funcional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Next.js</div>
              <div className="text-sm text-gray-600">Framework</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Único Caminho - Plataforma de marketplace global</p>
          <p className="mt-1">Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
        </div>
      </main>
    </div>
  );
}
