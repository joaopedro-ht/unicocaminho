import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-neutral-900 mx-auto mb-4 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-route text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Único Caminho</h1>
          <p className="text-gray-600">Conectando pessoas e serviços globais</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/pages"
            className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors"
          >
            <i className="fa-solid fa-list mr-2"></i>
            Todas as Páginas
          </Link>

          <Link
            href="/dashboard"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
          >
            <i className="fa-solid fa-chart-line mr-2"></i>
            Dashboard Admin
          </Link>

          <Link
            href="/auth/login"
            className="w-full bg-white text-gray-900 py-4 px-6 rounded-lg font-semibold text-center block border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <i className="fa-solid fa-user mr-2"></i>
            Login / Registro
          </Link>

          <Link
            href="/profile"
            className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors"
          >
            <i className="fa-solid fa-user-circle mr-2"></i>
            Perfil do Usuário
          </Link>

          <Link
            href="/payment/methods"
            className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-center block hover:bg-purple-700 transition-colors"
          >
            <i className="fa-solid fa-credit-card mr-2"></i>
            Métodos de Pagamento
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Plataforma de marketplace global para serviços e produtos
          </p>
        </div>
      </div>
    </div>
  );
}
