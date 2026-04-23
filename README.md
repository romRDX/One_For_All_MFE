# Microfrontend Architecture Study (React + Vite + Module Federation)

Projeto de estudo de arquitetura **Microfrontend (MFE)** utilizando:

- React
- Vite
- Module Federation (`@originjs/vite-plugin-federation`)
- Redux compartilhado
- TypeScript
- Shared Types (contrato centralizado)

---

## 🏗️ Estrutura do projeto

```bash
client-mf/
  host/            # App principal (orquestrador)
  mfe-sidebar/     # Sidebar (navegação)
  mfe-content/     # Conteúdo principal
  mfe-home/        # Home
  mfe-dashboard/   # Dashboard
  shared-types/    # Tipos compartilhados (StoreApi)
```

---

## 🔗 Arquitetura

### 🔹 Host

- Cria o store global (Redux)
- Expõe `storeApi`
- Carrega MFEs via Module Federation

---

### 🔹 MFEs

- Não conhecem Redux diretamente
- Usam apenas `storeApi`
- Recebem dependências via props

---

### 🔹 Shared Types

- Define o contrato (`StoreApi`)
- Usado por todos os MFEs + host
- Evita duplicação de tipos

---

## 🔥 StoreApi (Facade)

Os MFEs NÃO usam `dispatch` diretamente.

```ts
storeApi.navigation.setPage("home");
storeApi.user.setUser(user);
```

👉 Redux fica encapsulado no host

---

# 🚀 Como rodar o projeto

## ⚠️ IMPORTANTE

Você precisa rodar **TODOS os MFEs + host ao mesmo tempo**

Além disso, deve rodar cada projeto nas seguintes portas:

# HOST - 4173

# HOME - 4174

# DASH - 4175

# SIDEBAR - 4176

# CONTENT - 4177

---

## 🧱 1. Instalar dependências

```bash
cd shared-types && npm install

cd ../host && npm install
cd ../mfe-sidebar && npm install
cd ../mfe-content && npm install
cd ../mfe-home && npm install
cd ../mfe-dashboard && npm install
```

---

## 🧱 2. Build do shared-types

```bash
cd shared-types
npx tsc
```

👉 Sempre rode novamente se mudar tipos

---

## 🧱 3. Instalar shared-types nos apps

```bash
cd ../host
npm install ../shared-types

cd ../mfe-sidebar
npm install ../shared-types

cd ../mfe-content
npm install ../shared-types

cd ../mfe-home
npm install ../shared-types

cd ../mfe-dashboard
npm install ../shared-types
```

---

# ▶️ 4. Rodar tudo (DEV)

Abra **5 terminais**:

---

### ▶️ Terminal 1 — Home

```bash
cd mfe-home
npm run dev
```

---

### ▶️ Terminal 2 — Dashboard

```bash
cd mfe-dashboard
npm run dev
```

---

### ▶️ Terminal 3 — Sidebar

```bash
cd mfe-sidebar
npm run dev
```

---

### ▶️ Terminal 4 — Content

```bash
cd mfe-content
npm run dev
```

---

### ▶️ Terminal 5 — Host

```bash
cd host
npm run dev
```

---

## 🌐 Acessar aplicação

```text
http://localhost:4173/
```

---

# 🧪 Testes básicos

## ✔ Navegação

- Home
- Dashboard
- App

## ✔ Sidebar

- Botão Home
- Botão Profile

## ✔ Estado global

- Navegação muda o conteúdo
- Dados do usuário aparecem no console

---

# 🏭 Rodar em produção (build)

## 1. Build dos MFEs

```bash
cd mfe-home && npm run build && npm run preview
cd ../mfe-dashboard && npm run build && npm run preview
cd ../mfe-sidebar && npm run build && npm run preview
cd ../mfe-content && npm run build && npm run preview
```

---

## 2. Build do Host

```bash
cd ../host
npm run build
npm run preview
```

---

# ⚠️ Observações importantes

- `shared-types` NÃO é um MFE
- MFEs NÃO usam Redux diretamente
- Comunicação via `storeApi`
- Evite duplicar tipos

---

# 📈 Próximos passos

- Estado async (login real)
- Persistência (localStorage)
- Hooks reativos (`useStore`)
- Error boundaries
- Monorepo com workspaces

---

# 💡 Insight

> MFEs compartilham runtime
> Types compartilham contrato

---

# 👨‍💻 Autor

Projeto de estudo focado em arquitetura frontend moderna e cenários reais de produção.
