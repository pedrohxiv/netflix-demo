# Projeto Demo Netflix

Este é um projeto demo da Netflix desenvolvido em TypeScript utilizando as seguintes tecnologias:

- Next.js 13
- Tailwind CSS
- Redux
- Stripe Checkout
- The Movie DataBase (TMDB) API

O objetivo deste projeto é criar uma aplicação web que replica algumas funcionalidades da Netflix, como exibição de filmes e séries, categorias, banners promocionais e autenticação de usuários.

## Funcionalidades

- Exibição de filmes e séries por categorias
- Banners promocionais na página inicial
- Autenticação de usuários
- Integração com o Stripe Checkout para pagamento de assinaturas

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. Clone este repositório para o seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/pedrohxiv/netflix-demo.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd netflix-demo
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```
   API_KEY=seu-api-key-do-TMDB
   STRIPE_SECRET_KEY=sua-chave-publica-do-Stripe
   ```

   Certifique-se de substituir `seu-api-key-do-TMDB` pela sua chave de API do The Movie DataBase e `sua-chave-publica-do-Stripe` pela sua chave pública do Stripe.

5. Execute o projeto:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse o projeto no seu navegador:

   O projeto estará disponível no endereço [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

A estrutura do projeto é baseada no framework Next.js e segue a convenção de pastas recomendada:

- `/app`: Contém as páginas da aplicação
  - `/api`: Contém a função de acesso à API do Stripe
- `/components`: Contém os componentes reutilizáveis
- `/store`: Contém a configuração do Redux e os reducers
