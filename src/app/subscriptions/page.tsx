'use client';

export default function SubscriptionsPage() {
  const plans = [
    {
      name: 'Básico',
      price: '€9,99',
      period: '/mês',
      description: 'Acesso básico aos serviços',
      features: [
        'Até 5 anúncios ativos',
        'Suporte por chat',
        'Acesso a 10 categorias',
        'Relatórios básicos'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Profissional',
      price: '€29,99',
      period: '/mês',
      description: 'Para profissionais e pequenas empresas',
      features: [
        'Até 50 anúncios ativos',
        'Suporte prioritário',
        'Acesso ilimitado a categorias',
        'Relatórios avançados',
        'Analytics em tempo real',
        'Integração com redes sociais'
      ],
      popular: true,
      color: 'border-primary'
    },
    {
      name: 'Empresarial',
      price: '€99,99',
      period: '/mês',
      description: 'Para grandes empresas e corporações',
      features: [
        'Anúncios ilimitados',
        'Suporte 24/7',
        'API completa',
        'Dashboard personalizado',
        'Consultoria dedicada',
        'Relatórios customizados',
        'Integração enterprise'
      ],
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const currentPlan = {
    name: 'Profissional',
    price: '€29,99',
    status: 'Ativo',
    nextBilling: '15/01/2025',
    features: [
      'Até 50 anúncios ativos',
      'Suporte prioritário',
      'Relatórios avançados',
      'Analytics em tempo real'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="p-2 -ml-2">
              <i className="fa-solid fa-arrow-left text-gray-700 text-lg"></i>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Assinaturas</h1>
            <button className="p-2 -mr-2">
              <i className="fa-solid fa-ellipsis-vertical text-gray-700 text-lg"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Current Plan Section */}
      <section className="p-4">
        <div className="bg-gradient-to-r from-primary to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Plano Atual</p>
                <h2 className="text-2xl font-bold">{currentPlan.name}</h2>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{currentPlan.price}</div>
                <div className="text-sm text-white/80">por mês</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentPlan.status}
              </span>
              <span className="text-white/80 text-sm">
                Próxima cobrança: {currentPlan.nextBilling}
              </span>
            </div>

            <div className="space-y-2">
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className="fa-solid fa-check text-green-300 text-sm"></i>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="px-4 pb-20">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Planos Disponíveis</h2>

        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-2 ${plan.color} relative ${
                plan.popular ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-600 text-sm">{plan.period}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check text-green-500 text-sm"></i>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.name === currentPlan.name ? 'Plano Atual' : 'Escolher Plano'}
              </button>
            </div>
          ))}
        </div>

        {/* Billing History */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Cobranças</h3>
          <div className="space-y-3">
            {[
              { date: '15/12/2024', amount: '€29,99', status: 'Pago', method: 'Cartão ****1234' },
              { date: '15/11/2024', amount: '€29,99', status: 'Pago', method: 'PIX' },
              { date: '15/10/2024', amount: '€29,99', status: 'Pago', method: 'PayPal' }
            ].map((billing, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{billing.date}</p>
                    <p className="text-sm text-gray-600">{billing.method}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{billing.amount}</p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {billing.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
