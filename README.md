# 🤖 Commit Agent IA

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/kingdev/commit_agent)

**Um agente de IA inteligente que analisa suas alterações no Git e gera mensagens de commit automáticas utilizando Google Gemini AI**

[Instalação](#-instalação) •
[Configuração](#️-configuração) •
[Como Usar](#-como-usar) •
[Build](#️-build) •
[Contribuição](#-contribuição)

</div>

---

## 📋 Sobre o Projeto

O **Commit Agent IA** é uma ferramenta que automatiza a criação de mensagens de commit para seus repositórios Git. Utilizando a inteligência artificial do Google Gemini, o agente:

- 🔍 Analisa automaticamente as alterações no seu repositório
- 📝 Gera mensagens de commit claras e descritivas
- ⚡ Executa os comandos Git necessários (add, status, diff)
- 🎯 Cria commits seguindo boas práticas
- 👤 **Deixa o `git push` por sua conta** - você mantém o controle final

> **Nota**: O agente **NÃO** faz push automático. Essa responsabilidade fica com o usuário para maior segurança e controle.

## ✨ Funcionalidades

- ✅ Verificação automática do status do Git
- ✅ Adição automática de arquivos modificados (`git add .`)
- ✅ Análise de diferenças no staging area (`git diff --staged`)
- ✅ Geração inteligente de mensagens de commit com IA
- ✅ Execução automática do commit
- ✅ Interface de linha de comando simples
- ✅ Timeouts configurados entre comandos para estabilidade

## 🚀 Instalação

### Pré-requisitos

- Node.js >= 18.0.0
- Git configurado no sistema
- Chave de API do Google Gemini AI

### Via NPM (Recomendado)

```bash
# Clone o repositório
git clone https://github.com/kingdev/commit_agent.git
cd commit_agent

# Instale as dependências
npm install
```

### Via Executável

Baixe o executável pré-compilado na seção [Releases](https://github.com/kingdev/commit_agent/releases) para seu sistema operacional:

- 🐧 Linux x64
- 🪟 Windows x64  
- 🍎 macOS x64

### Instalação Global (Linux/macOS)

Para usar o comando `commit-agent` em qualquer lugar do sistema:

```bash
# 1. Torne o arquivo executável
chmod +x commit_agent-linux

# 2. Mova para um diretório do PATH
sudo mv commit_agent-linux /usr/local/bin/commit-agent

# 3. Agora funciona globalmente
commit-agent
```

**Alternativa sem sudo:**

```bash
# 1. Crie diretório local (se não existir)
mkdir -p ~/bin

# 2. Mova o executável
mv commit_agent-linux ~/bin/commit-agent
chmod +x ~/bin/commit-agent

# 3. Adicione ao PATH (se não estiver)
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc #sistemas base manjaro ou arch

source ~/.bashrc
source ~/.zshrc

# 4. Agora funciona globalmente
commit-agent
```

## ⚙️ Configuração

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# .env
GOOGLE_API_KEY=sua_chave_da_api_do_gemini_aqui
```

### 2. Obter Chave da API do Google Gemini

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma nova chave de API
3. Copie a chave e cole no arquivo `.env`

### 3. Personalizar Treinamento (Opcional)

O arquivo `src/trenamento/commit.md` contém as instruções de treinamento para a IA. Você pode personalizar conforme suas preferências de estilo de commit.

## 🎯 Como Usar

### Via Node.js

```bash
# Execute no diretório do seu projeto Git
node /caminho/para/commit_agent/index.js
```

### Via Executável

```bash
# Localmente (no diretório onde está o executável)
./commit_agent-linux

# Globalmente (após instalação global)
commit-agent
```

### Fluxo de Execução

1. 🔍 **Verificação**: O agente verifica o status do Git
2. ➕ **Adição**: Adiciona automaticamente as alterações (`git add .`)
3. 📊 **Análise**: Analisa as diferenças no staging area
4. 🤖 **IA**: Envia os dados para o Gemini AI gerar a mensagem
5. 💾 **Commit**: Executa o commit com a mensagem gerada
6. ✋ **Push**: **Você** executa `git push` quando quiser

### Exemplo de Saída

```
Iniciando o agente de IA para commit
Local: /home/user/meu-projeto
Verificando status do git...
Adicionando alterações...
Verificando alterações no stage...
Gerando mensagem de commit...
Commitando alterações:

feat: adiciona validação de entrada para formulário de login

- Implementa validação de email com regex
- Adiciona verificação de senha mínima de 8 caracteres
- Melhora feedback visual para campos inválidos

Commit realizado com sucesso:
[main a1b2c3d] feat: adiciona validação de entrada para formulário de login
 3 files changed, 45 insertions(+), 12 deletions(-)

Agora execute: git push
```

## 🛠️ Build

### Gerar Executável

```bash
# Instalar pkg globalmente (se não tiver)
npm install -g pkg

# Gerar executáveis para múltiplas plataformas
npm run build
```

Os executáveis serão gerados na pasta `exe/`:
- `commit_agent-linux` (Linux x64)
- `commit_agent-win.exe` (Windows x64)
- `commit_agent-macos` (macOS x64)

### Build Sem Arquivo .env

Para distribuição, remova o `.env` da configuração `pkg.assets` no `package.json` antes do build.

## 📁 Estrutura do Projeto

```
commit_agent/
├── src/
│   ├── command/
│   │   ├── git.js          # Comandos Git
│   │   ├── gemini.js       # Integração com Gemini AI
│   │   └── shell.js        # Execução de comandos shell
│   └── trenamento/
│       └── commit.md       # Instruções de treinamento da IA
├── index.js                # Arquivo principal
├── package.json
├── .env                    # Variáveis de ambiente (não commitado)
└── README.md
```

## 🔧 Configurações Avançadas

### Personalizar Targets do Build

Edite o `package.json` para alterar as plataformas de build:

```json
{
  "pkg": {
    "targets": [
      "node18-linux-x64",
      "node18-win-x64",
      "node18-macos-x64"
    ]
  }
}
```

### Modificar Timeouts

Os timeouts entre comandos estão configurados para 2 segundos. Para alterar, edite o `index.js`:

```javascript
await new Promise(resolve => setTimeout(resolve, 2000)); // 2 segundos
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Alexandre Henrique Da Rocha Araújo**

- GitHub: [@kingdev](https://github.com/kingdev)
- Email: [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

## ⚠️ Disclaimers

- 🔐 **Segurança**: Nunca commitete sua chave de API. Mantenha o arquivo `.env` no `.gitignore`
- 🚀 **Push Manual**: O agente **NÃO** faz push automático por questões de segurança
- 🤖 **IA**: As mensagens são geradas por IA e podem precisar de revisão ocasional
- 📋 **Git**: Certifique-se de que o Git está configurado corretamente no sistema

---

<div align="center">

**Se este projeto te ajudou, considere dar uma ⭐!**

</div>
