# Primeiro Passe — Site Institucional

Site da **Primeiro Passe**, agência esportiva e de marketing digital para
jovens atletas de futebol de base (Sub-13 a Sub-20).

Construído com **Vite + React + TypeScript + Tailwind CSS**, gerando um site
100% estático (HTML, CSS e JS puros) — sem necessidade de servidor Node.js,
banco de dados ou VPS. Funciona em qualquer hospedagem compartilhada, como
**Hostinger** ou **HostGator**.

---

## ✏️ Como atualizar o conteúdo do site (sem programar)

### Cadastrar ou editar atletas
Abra o arquivo:
```
src/data/athletes.ts
```
Cada atleta é um bloco de texto. Para cadastrar um novo, copie um bloco
inteiro (de `{` até `},`) e cole no final da lista, trocando os dados
(nome, foto, clube, posição, vídeo do YouTube, WhatsApp do agente, etc).
As instruções completas estão comentadas no topo do próprio arquivo.

### Fotos dos atletas
Você pode usar um link de imagem já hospedado na internet, **ou** colocar a
foto diretamente na pasta `public/atletas/` do projeto e referenciá-la como
`/atletas/nome-da-foto.jpg` no campo `foto` do atleta.

### Dados gerais da agência (WhatsApp, endereço, redes sociais, estatísticas)
Abra o arquivo:
```
src/data/siteConfig.ts
```
e edite os valores entre aspas.

---

## 💻 Como rodar o projeto no computador

```bash
npm install       # instala as dependências (só na primeira vez)
npm run dev        # abre o site em modo de edição, em http://localhost:5173
npm run build       # gera a versão final e otimizada do site, na pasta "dist/"
```

---

## 🚀 Guia de Deploy — Hostinger (hPanel) ou HostGator (cPanel)

Depois de editar o que for necessário, siga este passo a passo:

### Passo 1 — Gerar os arquivos finais do site
No terminal, dentro da pasta do projeto, rode:
```bash
npm run build
```
Isso vai criar uma pasta chamada **`dist`**. Ela contém *todos* os arquivos
finais do site (HTML, CSS, JS, imagens), prontos para publicar.

### Passo 2 — Compactar a pasta `dist`
Compacte o **conteúdo** da pasta `dist` (os arquivos que estão *dentro* dela,
não a pasta em si) em um arquivo `.zip`. No Windows, basta selecionar todos
os arquivos dentro de `dist`, clicar com o botão direito e escolher
"Enviar para" → "Pasta compactada (zipada)".

### Passo 3 — Acessar o Gerenciador de Arquivos
- **Hostinger:** entre no [hPanel](https://hpanel.hostinger.com), vá em
  **Arquivos → Gerenciador de Arquivos**.
- **HostGator:** entre no **cPanel**, vá em **Arquivos → Gerenciador de
  Arquivos (File Manager)**.

### Passo 4 — Enviar os arquivos para `public_html`
1. Entre na pasta `public_html` (é a pasta raiz do seu site).
2. Se já existir algum site antigo lá, faça backup e remova os arquivos
   antigos antes de subir os novos.
3. Clique em **"Fazer Upload"** (Upload) e envie o arquivo `.zip` criado no
   Passo 2.
4. Depois do upload, clique com o botão direito no `.zip` enviado e escolha
   **"Extrair"** (Extract) — isso descompacta tudo dentro de `public_html`.
5. Apague o arquivo `.zip` depois de extrair (opcional, apenas organização).

### Passo 5 — Confirmar que está tudo certo
Acesse o endereço do seu domínio no navegador. O site deve carregar
normalmente, incluindo as páginas internas (ex: `seusite.com/sobre`).

> **Importante:** dentro da pasta `dist` existe um arquivo chamado
> `.htaccess`. Ele é **essencial** para as páginas internas do site (como
> "Sobre" e os perfis de atletas) funcionarem corretamente. Alguns
> gerenciadores de arquivo escondem arquivos que começam com ponto — ative a
> opção **"Mostrar arquivos ocultos"** no Gerenciador de Arquivos para
> garantir que ele foi enviado junto com os demais.

---

## 📩 Formulário de Contato / Orçamento

O formulário de avaliação não depende de servidor ou banco de dados: ao ser
enviado, ele monta uma mensagem formatada e abre automaticamente uma conversa
no WhatsApp da agência, com os dados já preenchidos. Não é necessário
nenhuma configuração adicional para isso funcionar.

---

## 🛠️ Stack Tecnológica

- [Vite](https://vite.dev) — build ultrarrápido, gera site estático.
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4 — estilização.
- [React Router](https://reactrouter.com) — navegação entre páginas.
- [Lucide Icons](https://lucide.dev) — ícones.
