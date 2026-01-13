# 📚 English365 - Fluência em Inglês

Aplicativo PWA de flashcards para aprender inglês com sistema de repetição espaçada (estilo Anki).

## 📁 Estrutura do Projeto

```
english-card/
├── index.html              # Página principal
├── manifest.json           # Manifest do PWA
├── css/
│   └── app.css            # Estilos
├── js/
│   └── app.js             # Lógica da aplicação
├── sw/
│   └── service-worker.js  # Service Worker (PWA)
├── icons/
│   ├── icon.svg           # Ícone SVG (fonte)
│   ├── icon-192.png       # Ícone 192x192 (gerar)
│   ├── icon-512.png       # Ícone 512x512 (gerar)
│   ├── gerar-icones.html  # Gerador de ícones
│   └── README.md          # Instruções dos ícones
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Gerar os Ícones

1. Abra `icons/gerar-icones.html` no navegador
2. Clique em **"✨ Gerar e Baixar Todos Automaticamente"**
3. Salve os arquivos `icon-192.png` e `icon-512.png` na pasta `icons/`

### 2. Executar a Aplicação

**Importante:** O app precisa rodar em um servidor HTTP (não funciona com `file://`)

#### Opção A: Python
```bash
python -m http.server 8000
```
Acesse: http://localhost:8000

#### Opção B: Node.js (http-server)
```bash
npx http-server -p 8000
```

#### Opção C: VS Code (Live Server)
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html` > "Open with Live Server"

### 3. Instalar como PWA

- **Chrome/Edge:** Menu > "Instalar app" ou ícone de instalação na barra de endereço
- **Safari (iOS):** Compartilhar > "Adicionar à Tela de Início"
- **Android:** Menu > "Adicionar à tela inicial"

## ✨ Funcionalidades

- 📚 874 flashcards organizados por níveis
- 🔥 Sistema de sequência (streak)
- 📊 Estatísticas detalhadas
- ⚙️ Configuração de cards por dia
- 📱 Design otimizado para mobile
- 🔄 Sistema de repetição espaçada (Anki-like)
- 💾 Armazenamento local (localStorage)
- 📤 Exportar/Importar dados
- 🌐 Funciona offline (PWA)

## 🎯 Níveis

1. **Iniciante** - Frases básicas e vocabulário simples
2. **Básico** - Estruturas mais complexas
3. **Intermediário** - Expressões e frases avançadas
4. **Avançado** - Fluência e nuances

## 📝 Licença

Projeto pessoal para aprendizado de inglês.
