'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [accountType, setAccountType] = useState<'client' | 'partner' | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOnboarding(true);
  };

  const handleGoogleLogin = () => {
    setShowOnboarding(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOnboarding(true);
  };

  const handleAccountTypeSelect = (type: 'client' | 'partner') => {
    setAccountType(type);
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-white">
        {/* Client Onboarding */}
        {accountType === 'client' && (
          <div className="h-screen flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-32 h-32 bg-neutral-800 rounded-full flex items-center justify-center mb-8">
                <i className="fa-solid fa-globe text-white text-5xl"></i>
              </div>
              <h2 className="text-2xl text-neutral-900 mb-4">Serviços e produtos globais</h2>
              <p className="text-neutral-600 text-base leading-relaxed">Na palma das mãos</p>
            </div>
            <div className="px-6 pb-8">
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-8 h-1 bg-neutral-900 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
              </div>
              <button
                onClick={() => setOnboardingStep(onboardingStep + 1)}
                className="w-full py-3 bg-neutral-900 text-white rounded-lg"
              >
                Continuar
              </button>
              <button
                onClick={() => setShowOnboarding(false)}
                className="w-full py-3 text-neutral-600 mt-2"
              >
                Pular
              </button>
            </div>
          </div>
        )}

        {/* Partner Onboarding */}
        {accountType === 'partner' && (
          <div className="h-screen flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-32 h-32 bg-neutral-800 rounded-full flex items-center justify-center mb-8">
                <i className="fa-solid fa-earth-americas text-white text-5xl"></i>
              </div>
              <h2 className="text-2xl text-neutral-900 mb-4">Ofereça seus serviços</h2>
              <p className="text-neutral-600 text-base leading-relaxed">E produtos globalmente</p>
            </div>
            <div className="px-6 pb-8">
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-8 h-1 bg-neutral-900 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
                <div className="w-2 h-1 bg-neutral-300 rounded-full"></div>
              </div>
              <button
                onClick={() => setOnboardingStep(onboardingStep + 1)}
                className="w-full py-3 bg-neutral-900 text-white rounded-lg"
              >
                Continuar
              </button>
              <button
                onClick={() => setShowOnboarding(false)}
                className="w-full py-3 text-neutral-600 mt-2"
              >
                Pular
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (showRegister) {
    return (
      <div className="min-h-screen flex-col block">
        <header className="px-6 pt-8 pb-4">
          <div className="text-center">
            <h1 className="text-xl text-neutral-900">Único Caminho</h1>
          </div>
        </header>

        <div className="px-6 mb-6">
          <div className="flex gap-2 bg-neutral-100 p-1 rounded-lg">
            <button
              onClick={() => setShowRegister(false)}
              className="flex-1 py-2.5 text-sm text-neutral-600"
            >
              Acessar conta
            </button>
            <button className="flex-1 py-2.5 text-sm bg-white text-neutral-900 rounded-md shadow-sm">
              Registrar Conta
            </button>
          </div>
        </div>

        {/* Account Type Selection */}
        <div className="px-6 mb-6">
          <p className="text-sm text-neutral-700 mb-3">Tipo de conta</p>
          <div className="space-y-3">
            <button
              onClick={() => handleAccountTypeSelect('client')}
              className={`w-full p-4 border-2 ${accountType === 'client' ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-300'} rounded-lg text-left`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-user text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="text-neutral-900">Registrar como Cliente</div>
                  <div className="text-xs text-neutral-600">Acesse serviços globais</div>
                </div>
                <i className={`fa-solid ${accountType === 'client' ? 'fa-circle-dot' : 'fa-regular fa-circle'} text-neutral-900`}></i>
              </div>
            </button>
            <button
              onClick={() => handleAccountTypeSelect('partner')}
              className={`w-full p-4 border-2 ${accountType === 'partner' ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-300'} rounded-lg text-left`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-building text-neutral-700"></i>
                </div>
                <div className="flex-1">
                  <div className="text-neutral-900">Registrar como Parceiro</div>
                  <div className="text-xs text-neutral-600">Ofereça seus serviços</div>
                </div>
                <i className={`fa-solid ${accountType === 'partner' ? 'fa-circle-dot' : 'fa-regular fa-circle'} text-neutral-900`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Registration Forms */}
        {accountType === 'client' && (
          <div className="px-6 pb-20">
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">País</label>
                <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm">
                  <option>Selecione o país</option>
                  <option>Brasil</option>
                  <option>Portugal</option>
                  <option>Angola</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Nome completo</label>
                <input type="text" placeholder="Seu nome" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Data de Nascimento</label>
                <input type="date" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
                <p className="text-xs text-neutral-500 mt-1">Você deve ter 18 anos ou mais</p>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Documento de Identificação</label>
                <input type="text" placeholder="CPF, RG, Passaporte..." className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Senha</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">WhatsApp</label>
                <input type="tel" placeholder="+55 11 99999-9999" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Telegram (opcional)</label>
                <input type="text" placeholder="@usuario" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>

              <button type="submit" className="w-full py-3 bg-neutral-900 text-white rounded-lg mt-6">
                Criar Conta
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-neutral-300"></div>
              <span className="text-sm text-neutral-500">ou</span>
              <div className="flex-1 h-px bg-neutral-300"></div>
            </div>

            <button onClick={handleGoogleLogin} className="w-full py-3 border-2 border-neutral-300 rounded-lg flex items-center justify-center gap-2 text-neutral-900">
              <i className="fa-brands fa-google text-lg"></i>
              Continuar com Google
            </button>
          </div>
        )}

        {accountType === 'partner' && (
          <div className="px-6 pb-20">
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">País</label>
                <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm">
                  <option>Selecione o país</option>
                  <option>Brasil</option>
                  <option>Portugal</option>
                  <option>Angola</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Nome da empresa</label>
                <input type="text" placeholder="Nome da sua empresa" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Número de Registro da empresa</label>
                <input type="text" placeholder="CNPJ, NIF, etc." className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Site da empresa</label>
                <input type="url" placeholder="https://suaempresa.com" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">E-mail</label>
                <input type="email" placeholder="contato@empresa.com" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Senha</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">WhatsApp da empresa</label>
                <input type="tel" placeholder="+55 11 99999-9999" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-1.5">Telegram (opcional)</label>
                <input type="text" placeholder="@empresa" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
              </div>
              <button type="submit" className="w-full py-3 bg-neutral-900 text-white rounded-lg mt-6">
                Criar Conta Parceiro
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      {/* Auth Screen */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="px-6 pt-8 pb-4">
          <div className="text-center">
            <h1 className="text-xl text-neutral-900">Único Caminho</h1>
          </div>
        </header>

        {/* Tabs */}
        <div className="px-6 mb-6">
          <div className="flex gap-2 bg-neutral-100 p-1 rounded-lg">
            <button className="flex-1 py-2.5 text-sm bg-white text-neutral-900 rounded-md shadow-sm">
              Acessar conta
            </button>
            <button
              onClick={() => setShowRegister(true)}
              className="flex-1 py-2.5 text-sm text-neutral-600"
            >
              Registrar Conta
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="px-6 flex-1">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm text-neutral-700 mb-1.5">E-mail</label>
              <input type="email" placeholder="seu@email.com" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1.5">Senha</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm" />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-neutral-600 underline">Esqueceu a senha?</a>
            </div>
            <button type="submit" className="w-full py-3 bg-neutral-900 text-white rounded-lg">
              Entrar
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-300"></div>
            <span className="text-sm text-neutral-500">ou</span>
            <div className="flex-1 h-px bg-neutral-300"></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full py-3 border-2 border-neutral-300 rounded-lg flex items-center justify-center gap-2 text-neutral-900">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="fa-brands fa-google text-lg">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Continuar com Google
          </button>
        </div>
        <div className="h-20"></div>
      </div>
    </div>
  );
}
