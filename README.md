# Único Caminho - Frontend

Plataforma de marketplace global que conecta clientes e parceiros/fornecedores, oferecendo serviços e produtos exclusivos em uma única plataforma.

## 🏗️ Arquitetura

### Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Ícones**: Font Awesome
- **Gráficos**: Plotly.js
- **Fonte**: Inter (Google Fonts)

### Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/                    # Páginas (Next.js App Router)
│   │   ├── auth/              # Páginas de autenticação
│   │   │   └── login/         # Login e registro
│   │   ├── dashboard/         # Dashboard administrativo
│   │   ├── payment/           # Páginas de pagamento
│   │   │   └── methods/       # Métodos de pagamento
│   │   ├── profile/           # Perfil do usuário
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/            # Componentes reutilizáveis
│   └── lib/                   # Utilitários e configurações
├── tailwind.config.js         # Configuração Tailwind
└── package.json
```

## 🚀 Funcionalidades

### 1. Autenticação e Registro
- **Login**: Acesso com e-mail/senha ou Google
- **Registro**: Dois tipos de conta (Cliente e Parceiro)
- **Onboarding**: Fluxo guiado para novos usuários
- **Validação**: Documentos e informações pessoais

### 2. Dashboard Administrativo
- **KPIs**: Métricas principais (Clientes, Parceiros, Anúncios)
- **Gráficos**: Status de clientes/parceiros, crescimento temporal
- **Mapa Global**: Receita por país com visualização geográfica
- **Relatórios**: Receitas detalhadas e estatísticas

### 3. Perfil do Usuário
- **Informações Pessoais**: Dados de contato e plano atual
- **Sistema de Convites**: Link de referência e bonificações
- **Segurança**: Gerenciamento de conta e autenticação
- **Integrações**: Conta Google vinculada

### 4. Sistema de Pagamento
- **Métodos Diversos**: PayPal, PIX, Neteller, Multibanco, Criptomoedas
- **Fluxo de Pagamento**: Seleção e processamento seguro
- **QR Code**: Suporte a PIX brasileiro
- **Cartões de Crédito**: Interface completa para pagamentos

## 🛣️ Rotas da Aplicação

| Rota | Descrição | Funcionalidades |
|------|-----------|----------------|
| `/` | Página Inicial | Menu principal com links para todas as seções |
| `/pages` | Todas as Páginas | Listagem completa e organizada de todas as páginas disponíveis |
| `/services` | Serviços & Produtos | Marketplace com categorias de imóveis, veículos, serviços |
| `/social` | Projetos Sociais | Plataforma de arrecadação para projetos beneficentes |
| `/subscriptions` | Assinaturas | Planos de assinatura e histórico de cobrança |
| `/affiliate` | Programa de Afiliados | Sistema de indicação e comissões |
| `/product` | Detalhes do Produto | Página de exemplo de produto/serviço |
| `/auth/login` | Login/Registro | Autenticação, registro de conta, onboarding |
| `/dashboard` | Dashboard Admin | KPIs, gráficos, relatórios, mapa global |
| `/profile` | Perfil do Usuário | Informações pessoais, convites, segurança |
| `/payment/methods` | Métodos de Pagamento | Seleção e processamento de pagamentos |

## 🎯 Principais Componentes

### Layout e Navegação
- **Sidebar**: Navegação lateral com menu administrativo
- **Header**: Cabeçalho com notificações e ações
- **Progress Bar**: Indicador de progresso em fluxos multi-etapa

### Formulários
- **Login Form**: Autenticação com validação
- **Registration Forms**: Cadastro diferenciado para clientes e parceiros
- **Payment Forms**: Dados de cartão e outras informações de pagamento

### Visualizações de Dados
- **KPI Cards**: Cards com métricas principais
- **Charts**: Gráficos de pizza, barras e mapas
- **Progress Indicators**: Barras de progresso por país

### UI Components
- **Onboarding Screens**: Telas de introdução para novos usuários
- **Profile Sections**: Seções organizadas do perfil
- **Payment Methods**: Cards para diferentes métodos de pagamento

## 🎨 Design System

### Cores Principais
- **Primary**: `#2563eb` (Azul)
- **Secondary**: `#64748b` (Cinza)
- **Accent Colors**: Verde, Roxo, Laranja, etc.

### Tipografia
- **Fonte Principal**: Inter (sans-serif)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Componentes Visuais
- **Botões**: Estados hover, focus e disabled
- **Cards**: Sombras e bordas consistentes
- **Ícones**: Font Awesome para consistência

## 📊 Dados e Estatísticas

### Métricas Principais
- **Total de Clientes**: 8,547 (+12.5%)
- **Parceiros/Fornecedores**: 1,234 (+8.3%)
- **Total de Anúncios**: 3,892 (+18.7%)
- **Receita Total**: R$ 4,371,346 (+13.8%)

### Distribuição Geográfica
- **Brasil**: 4,523 usuários (75%)
- **Portugal**: 2,187 usuários (45%)
- **EUA**: 1,456 usuários (30%)
- **Espanha**: 892 usuários (20%)

## 🛡️ Segurança e Privacidade

- **Pagamentos Seguros**: Certificação SSL e proteção de dados
- **Autenticação**: OAuth com Google e validação robusta
- **Dados Sensíveis**: Criptografia e conformidade com LGPD

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <repository-url>
cd unico-caminho/frontend

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Build otimizado
npm run build

# Executar em produção
npm start
```

## 🔧 Scripts Disponíveis

- `npm run dev`: Servidor de desenvolvimento
- `npm run build`: Build para produção
- `npm run start`: Servidor de produção
- `npm run lint`: Verificação de código

## 🌐 Navegação

Acesse [http://localhost:3000](http://localhost:3000) após executar o projeto.

### Fluxo Principal
1. **Página Inicial** → Seleção de seção
2. **Login/Registro** → Onboarding → Dashboard/Perfil
3. **Dashboard** → Visualização de métricas e dados
4. **Perfil** → Gerenciamento de conta
5. **Pagamento** → Seleção e processamento de método

## 📝 Notas de Desenvolvimento

- **SSR/SSG**: Next.js com otimização automática
- **TypeScript**: Tipagem completa para melhor DX
- **Tailwind**: Utilitários para desenvolvimento rápido
- **Responsividade**: Design mobile-first
- **Performance**: Lazy loading e otimização de assets

---

**Único Caminho** - Conectando pessoas e oportunidades globais.
