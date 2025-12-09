'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyInvite = () => {
    navigator.clipboard.writeText('https://app.com/invite/joao123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="relative">
        <div className="h-48 overflow-hidden relative">
          <Image
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8a456d836f-efcf727ab9339552f05f.png"
            alt="beautiful landscape of Brazil with vibrant colors and nature"
            width={400}
            height={192}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <button className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-arrow-left text-lg"></i>
          </button>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-gear text-lg"></i>
          </button>
        </div>

        <div className="relative px-6 -mt-16">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
              <Image src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Avatar" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-xl font-bold text-gray-900">João Silva</h1>
              <div className="flex items-center justify-center mt-1 text-gray-600">
                <i className="fa-solid fa-location-dot text-sm mr-1"></i>
                <span className="text-sm">Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <i className="fa-solid fa-envelope text-blue-500 w-5"></i>
              <span className="ml-3 text-gray-700">joao.silva@email.com</span>
            </div>

            <div className="flex items-center">
              <i className="fa-solid fa-phone text-green-500 w-5"></i>
              <span className="ml-3 text-gray-700">+55 11 99999-9999</span>
            </div>

            <div className="flex items-center">
              <i className="fa-solid fa-crown text-yellow-500 w-5"></i>
              <div className="ml-3">
                <span className="text-gray-700">Plano Único</span>
                <span className="block text-xs text-gray-500">Válido até 25/12/2024</span>
              </div>
            </div>

            <div className="flex items-center">
              <i className="fa-solid fa-calendar text-purple-500 w-5"></i>
              <span className="ml-3 text-gray-700">Membro desde Janeiro 2023</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Convide Amigos</h2>

          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex-1 mr-2">https://app.com/invite/joao123</span>
              <button
                onClick={handleCopyInvite}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} mr-1`}></i>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center">
            <i className="fa-solid fa-gift mr-2"></i>
            Ver Convites e Bonificações
          </button>
        </div>
      </section>

      <section className="px-6 mt-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Segurança</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <i className="fa-brands fa-google text-red-500 text-xl mr-3"></i>
                <div>
                  <span className="font-medium text-gray-900">Conta Google</span>
                  <span className="block text-sm text-gray-600">Vinculada</span>
                </div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <i className="fa-solid fa-lock text-gray-500 text-xl mr-3"></i>
                <div>
                  <span className="font-medium text-gray-900">Senha</span>
                  <span className="block text-sm text-gray-600">Definida manualmente</span>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-medium">
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-8">
          <button className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-medium flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors">
            <i className="fa-solid fa-sign-out-alt"></i>
            <span>Sair da Conta</span>
          </button>
        </div>
      </section>
    </main>
  );
}
