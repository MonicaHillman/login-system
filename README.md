# 🔐 Sistema de Login — React + Node + SQLite

Este projeto é um sistema completo de autenticação com **frontend em React (com Tailwind CSS)** e **backend em Node.js (com SQLite, JWT e bcrypt)**.

---

## 🧱 Tecnologias Utilizadas

**Frontend:**
- React
- React Router
- Tailwind CSS

**Backend:**
- Node.js + Express
- SQLite com `sqlite3`
- JWT (`jsonwebtoken`)
- Hash de senhas com `bcrypt`
- CORS

---

## 📁 Estrutura do Projeto

```
project-root/
├── backend/
│ ├── auth.js
│ ├── db.js
│ ├── server.js
│ └── users.db (criado automaticamente)
└── frontend/
├── public/
├── src/
│ ├── pages/LoginPage.jsx
│ ├── App.js
│ └── index.css (com @tailwind)
```

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Backend

```
cd backend
npm install
node server.js
```

Servidor rodando em: http://localhost:3001

### 3. Frontend

```
cd frontend
npm install
npm run dev # ou npm start, dependendo do seu setup
```

Aplicação acessível em: http://localhost:5173

---

## ✨ Funcionalidades
* Registro de usuários com senha criptografada

* Login com validação no backend

* Autenticação com JWT

* Interface com Tailwind CSS

* Redirecionamento ao fazer login

---

## 📌 Rotas da API
```
POST /register
```
Cria um novo usuário.

```json
{
  "email": "exemplo@email.com",
  "password": "123456"
}
```

```
POST /login
```

Autentica e retorna um token JWT.

```json
{
  "token": "eyJhbGciOi..."
}
```

---

## ✅ Requisitos

* Node.js v18+
* npm
* SQLite embutido (não requer instalação externa)

---

## 🧪 Testes

Você pode testar as rotas com ferramentas como Postman ou Insomnia. Para testar o frontend, acesse o navegador com a URL indicada.