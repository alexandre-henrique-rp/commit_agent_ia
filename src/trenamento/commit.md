# Padrao-de-commit-ia

## 1. Verificação do Repositório

1.  **Identificar Conexão com GitHub:** Verifique se o diretório local do projeto está conectado a um repositório remoto no GitHub.
    * **Comando Sugerido:** `git remote -v`
2.  **Validação:**
    * **Se NÃO houver um remoto `origin`:** A automação deve ser encerrada, exibindo a mensagem: "ERRO: O projeto não está conectado a um repositório remoto no GitHub. Por favor, configure o link antes de continuar."
    * **Se houver um remoto `origin`:** Prossiga para a próxima etapa.

## 2. Análise das Alterações

1.  **Preparar Arquivos:** Adicione todas as alterações (novos arquivos, modificações e exclusões) à área de "staging".
    * **Comando:** `git add .`
2.  **Listar Arquivos Modificados:** Obtenha a lista de todos os arquivos que foram preparados para o commit.
    * **Comando:** `git diff --name-only --cached`
3.  **Analisar Contexto da Tarefa:**
    * Verifique a existência das pastas `doc/prp` ou `doc/todo`.
    * Analise o conteúdo dos arquivos dentro dessas pastas para identificar a tarefa que está sendo realizada, seu objetivo e critérios.
    * Inspecione o código nos arquivos modificados em busca de referências a IDs de tarefas (ex: `#123`, `TASK-45`, etc.).

## 3. Estrutura do Commit

### 3.1. Tipo (Obrigatório)

O tipo define a natureza da mudança. Deve ser um dos seguintes:

* `feat`: Uma nova funcionalidade (`feature`).
* `fix`: Uma correção de bug (`bug fix`).
* `docs`: Alterações na documentação.
* `style`: Alterações de formatação que não afetam a lógica do código (espaços, ponto e vírgula, etc).
* `refactor`: Refatoração de código que não corrige um bug nem adiciona uma funcionalidade.
* `perf`: Uma alteração de código que melhora o desempenho.
* `test`: Adição ou correção de testes.
* `build`: Alterações que afetam o sistema de build ou dependências externas.
* `ci`: Alterações em nossos arquivos e scripts de configuração de CI.
* `chore`: Outras alterações que não modificam o código-fonte ou os testes (ex: `gitignore`).

### 3.2. Escopo (Opcional)

O escopo fornece contexto adicional para a mudança (ex: `auth`, `payment`, `profile`).

### 3.3. Ícone e Resumo (Obrigatório)

O resumo é uma descrição curta e imperativa das alterações.

* **Ícone:** Use um emoji apropriado para o **tipo** do commit. A lista de ícones recomendados está abaixo.
* **ID da Tarefa:** Se um ID de tarefa foi identificado, ele deve vir no início do resumo, antes do ícone.
* **Descrição:** Descreva a mudança de forma concisa. Comece com letra maiúscula. Não termine com ponto final.

**Exemplos de Resumo:**

* `feat: ✨ Adiciona login com Google`
* `#15 fix(auth): 🐛 Corrige validação de senha`
* `docs: 📝 Atualiza o README com instruções de setup`

### 3.4. Corpo (Opcional)

* Use o corpo para fornecer mais detalhes sobre a mudança, explicando o "porquê" e o "como".
* Se uma tarefa específica do `doc/todo` foi resolvida, detalhe aqui qual item e como foi solucionado.
* Se houver um ID de tarefa, a descrição completa ou mensagem de confirmação da tarefa deve ser adicionada aqui.
* Separe o resumo do corpo com uma linha em branco.

**Exemplo de Corpo:**

- Renomeia rota privada principal para dashboard
- Adiciona novo arquivo de rotas raiz
- Atualiza dependências do projeto
- Melhora a organização da sidebar

## 4. Finalização

* Após montar a mensagem de commit completa, execute o comando `git commit`.
* A automação **não** deve executar o `git push`. O envio das alterações para o repositório remoto será feito manualmente pelo desenvolvedor.

---

## 🎨 Tabela de Ícones por Tipo de Commit

| Tipo       | Ícone | Descrição                                    |
| :--------- | :---: | :--------------------------------------------- |
| `feat`     |  ✨   | Adiciona uma nova funcionalidade.            |
| `fix`      |  🐛   | Corrige um bug.                                |
| `docs`     |  📝   | Escreve ou atualiza a documentação.          |
| `style`    |  💄   | Adiciona ou atualiza estilos (CSS).            |
| `refactor` |  ♻️   | Refatora código.                               |
| `perf`     |  ⚡️   | Melhora o desempenho.                          |
| `test`     |  ✅   | Adiciona ou atualiza testes.                 |
| `build`    |  📦   | Adiciona ou atualiza dependências/build.     |
| `ci`       |  🎡   | Adiciona ou atualiza configurações de CI/CD.   |
| `chore`    |  🔨   | Adiciona ou atualiza ferramentas/configurações. |
| `release`  |  🎉   | Lança ou versiona uma nova versão.           |
| `art`      |  🎨   | Melhora a estrutura/formato do código.       |