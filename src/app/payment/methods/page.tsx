'use client';

import { useState } from 'react';

export default function PaymentMethodsPage() {
  const [currentStep, setCurrentStep] = useState<'methods' | 'card' | 'pix'>('methods');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button className="p-2">
            <i className="fa-solid fa-arrow-left text-neutral-600 text-lg"></i>
          </button>
          <h1 className="text-lg text-neutral-900">Pagamento</h1>
          <div className="w-8"></div>
        </div>
      </header>

      {/* Progress Bar */}
      {currentStep !== 'methods' && (
        <div className="px-4 py-3 bg-neutral-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-600">Passo {currentStep === 'card' ? '2' : '2'} de 2</span>
            <span className="text-sm text-neutral-600">100%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full w-full"></div>
          </div>
        </div>
      )}

      {/* Payment Method Selection */}
      {currentStep === 'methods' && (
        <>
          <div className="px-4 py-3 bg-neutral-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Passo 1 de 2</span>
              <span className="text-sm text-neutral-600">50%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-1/2"></div>
            </div>
          </div>

          <div className="px-4 py-6">
            <div className="mb-6">
              <h2 className="text-xl text-neutral-900 mb-2">Método de Pagamento</h2>
              <p className="text-neutral-600">Selecione como deseja pagar sua assinatura</p>
            </div>

            {/* Plan Summary */}
            <div className="bg-neutral-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-neutral-600">Plano Selecionado</span>
                <span className="text-sm text-neutral-900">Caminho</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-neutral-600">Duração</span>
                <span className="text-sm text-neutral-900">Mensal</span>
              </div>
              <hr className="my-3 border-neutral-200" />
              <div className="flex justify-between items-center">
                <span className="text-base text-neutral-900">Total</span>
                <span className="text-lg text-neutral-900">€50,00</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              {/* PayPal */}
              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <i className="fa-brands fa-paypal text-white text-sm"></i>
                    </div>
                    <span className="text-neutral-900">PayPal</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-neutral-400 text-sm"></i>
                </div>
              </button>

              {/* PIX */}
              <button
                onClick={() => setCurrentStep('pix')}
                className="w-full p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <i className="fa-solid fa-qrcode text-white text-sm"></i>
                    </div>
                    <span className="text-neutral-900">PIX</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-neutral-400 text-sm"></i>
                </div>
              </button>

              {/* Neteller */}
              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-lime-600 rounded flex items-center justify-center">
                      <i className="fa-solid fa-credit-card text-white text-sm"></i>
                    </div>
                    <span className="text-neutral-900">Neteller</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-neutral-400 text-sm"></i>
                </div>
              </button>

              {/* Multibanco */}
              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                      <i className="fa-solid fa-building-columns text-white text-sm"></i>
                    </div>
                    <span className="text-neutral-900">Multibanco</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-neutral-400 text-sm"></i>
                </div>
              </button>

              {/* Criptomoeda */}
              <button className="w-full p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded flex items-center justify-center">
                      <i className="fa-solid fa-coin text-white text-sm"></i>
                    </div>
                    <span className="text-neutral-900">Tether (USDT)</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-neutral-400 text-sm"></i>
                </div>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Credit Card Payment */}
      {currentStep === 'card' && (
        <div className="px-4 py-6">
          <div className="mb-6">
            <h2 className="text-xl text-neutral-900 mb-2">Pagamento com Cartão</h2>
            <p className="text-neutral-600">Insira os dados do seu cartão de crédito</p>
          </div>

          {/* Card Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Número do Cartão</label>
              <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-3 border border-neutral-200 rounded-lg" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Validade</label>
                <input type="text" placeholder="MM/AA" className="w-full p-3 border border-neutral-200 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">CVV</label>
                <input type="text" placeholder="123" className="w-full p-3 border border-neutral-200 rounded-lg" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">Nome no Cartão</label>
              <input type="text" placeholder="João Silva" className="w-full p-3 border border-neutral-200 rounded-lg" />
            </div>
          </div>

          <button className="w-full bg-neutral-900 text-white py-3 rounded-lg mt-6">
            Confirmar Pagamento - €29,99
          </button>
        </div>
      )}

      {/* PIX Payment */}
      {currentStep === 'pix' && (
        <div className="px-4 py-6">
          <div className="mb-6">
            <h2 className="text-xl text-neutral-900 mb-2">Pagamento PIX</h2>
            <p className="text-neutral-600">Escaneie o QR Code ou copie o código</p>
          </div>

          {/* QR Code */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6 text-center">
            <div className="w-48 h-48 bg-neutral-800 mx-auto mb-4 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-qrcode text-white text-6xl"></i>
            </div>
            <p className="text-sm text-neutral-600">Escaneie com seu app bancário</p>
          </div>

          {/* PIX Code */}
          <div className="bg-neutral-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-700">Código PIX</span>
              <button className="text-sm text-neutral-900">
                <i className="fa-solid fa-copy mr-1"></i>
                Copiar
              </button>
            </div>
            <p className="text-xs text-neutral-600 break-all">00020126580014br.gov.bcb.pix013636297d2d-7a4c-4e5f-9f1a-8b2c3d4e5f6g52040000530398654041.005802BR5925EMPRESA EXEMPLO LTDA6009SAO PAULO62070503***6304A1B2</p>
          </div>

          {/* Payment Info */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-neutral-600">Valor</span>
              <span>€29,99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Válido até</span>
              <span>24/01/2025 às 23:59</span>
            </div>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-info-circle text-neutral-600 mt-0.5"></i>
              <div>
                <p className="text-sm text-neutral-800">O pagamento será processado automaticamente após a confirmação.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Footer */}
      <div className="px-4 py-6 border-t border-neutral-200 mt-8">
        <div className="flex items-center justify-center space-x-4 text-neutral-500">
          <i className="fa-solid fa-shield-halved"></i>
          <span className="text-sm">Pagamento 100% seguro</span>
        </div>
      </div>
    </div>
  );
}
