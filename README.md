# 🎉 Convite de Aniversário Interativo — Caleb

> Convite digital interativo desenvolvido como projeto de front-end, inspirado no universo de jogos clássicos e criado para celebrar os 2 anos do Caleb.

## 📌 Sobre o projeto

Este projeto consiste em um convite digital responsivo e interativo para aniversário.

A aplicação foi desenvolvida com foco em **experiência do usuário, interatividade, responsividade e organização de código**, permitindo que os convidados:

* 🎂 Visualizem as informações do aniversário;
* 👨‍👩‍👧 Informem a quantidade de adultos e crianças;
* 💬 Confirmem presença através do WhatsApp;
* 📍 Acessem a localização pelo Google Maps;
* 🧭 Iniciem a navegação pelo Waze;
* 👥 Acessem o grupo do evento;
* 🎮 Interajam com uma interface inspirada em jogos.

---

## 🖥️ Demonstração

🔗 **Demo:** [johnydu.github.io/convite-aniversario-caleb](https://johnydu.github.io/convite-aniversario-caleb/)

![Tela inicial do convite: cena em pixel art com bandeirinhas, balões, uma criança de chapéu de festa e um bolo com o número 2, sob o título "Caleb faz 2 anos!"](docs/preview.webp)

> A versão publicada usa dados fictícios (telefone, grupo e localização).

---

## 🚀 Tecnologias utilizadas

* **React**
* **TypeScript**
* **HTML5**
* **CSS3**
* **Vite**
* **Git**
* **GitHub**

---

## ✨ Funcionalidades

### 🎮 Interface interativa

Interface inspirada em jogos de plataforma, com uma cena em pixel art original desenhada em SVG, animações (que respeitam `prefers-reduced-motion`) e componentes interativos.

### ✅ Confirmação de presença

O usuário pode selecionar:

* Quantidade de adultos;
* Quantidade de crianças.

Após isso, a aplicação gera automaticamente uma mensagem personalizada para confirmação através do WhatsApp.

### 📍 Localização

O convite disponibiliza opções para acessar a localização através de:

* Google Maps;
* Waze.

### 👥 Grupo do evento

Botão de acesso direto ao grupo do evento no WhatsApp.

### 📱 Design responsivo

A interface foi desenvolvida para proporcionar uma boa experiência em diferentes tamanhos de tela, especialmente em dispositivos móveis.

---

## 📂 Estrutura do projeto

```text
convite-aniversario-caleb/
├── .github/workflows/pages.yml   # build e publicação no GitHub Pages
├── docs/preview.webp             # captura usada no README
├── public/favicon.svg
├── src/
│   ├── App.tsx                   # convite e confirmação de presença
│   ├── PartyScene.tsx            # cena em pixel art (SVG)
│   ├── config.ts                 # dados da festa (fictícios por padrão)
│   ├── index.css
│   └── main.tsx
├── .env.example                  # variáveis para os dados reais
├── index.html
├── package.json
└── vite.config.ts
```

---

## ⚙️ Como executar localmente

O projeto usa **pnpm** (versão definida em `.mise.toml`).

```bash
git clone https://github.com/Johnydu/convite-aniversario-caleb.git
cd convite-aniversario-caleb
pnpm install
pnpm dev
```

### Usando dados reais

Os dados da festa ficam em `src/config.ts`, com valores fictícios por padrão. Para gerar o convite de verdade sem expor nada no repositório, copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

O `.env.local` é ignorado pelo git.

> As variáveis `VITE_*` vão para o JavaScript do site publicado. Use os dados reais só no build que você compartilha com os convidados, nunca no repositório público.

---

## 🚀 Publicação

A cada push na `main`, o workflow `.github/workflows/pages.yml` verifica os tipos, gera o build e publica em GitHub Pages.

---

## 🔒 Privacidade

Este repositório possui uma versão adaptada para **portfólio público**.

Dados pessoais e informações privadas do evento, como:

* número de telefone;
* endereço residencial;
* coordenadas reais;
* links privados de grupos;

não devem ser disponibilizados publicamente.

As informações utilizadas nesta versão podem ser fictícias ou modificadas para fins de demonstração.

---

## 🎯 Objetivos do projeto

Este projeto também foi desenvolvido como forma de praticar conceitos importantes de desenvolvimento front-end, incluindo:

* Componentização com React;
* Tipagem com TypeScript;
* Gerenciamento de estado;
* Eventos e interações do usuário;
* Integração com links externos;
* Responsividade;
* Organização de projeto;
* Versionamento com Git;
* Publicação através do GitHub.

---

## 🛠️ Próximos passos

Algumas melhorias que podem ser implementadas futuramente:

* [ ] Publicação através do GitHub Pages;
* [ ] Melhorias nas animações;
* [ ] Otimização das imagens;
* [ ] Melhorias de acessibilidade;
* [ ] Melhorias de performance;
* [ ] Versão com tema visual personalizável;
* [ ] Sistema para geração de convites personalizados.

---

## 👨‍💻 Autor

**Johny Duarte**

Desenvolvedor em formação com foco em desenvolvimento de software e backend Java.

🔗 GitHub: [github.com/Johnydu](https://github.com/Johnydu)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

Consulte o arquivo [`LICENSE`](LICENSE) para mais informações.
