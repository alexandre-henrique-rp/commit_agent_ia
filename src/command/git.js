import { CommandShell } from "./shell.js";

export class CommandGit {
  constructor() { }
  add() {
    const shell = new CommandShell("git add .");
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }

  // Lista arquivos no staging area (adicionados)
  staged() {
    const shell = new CommandShell("git diff --cached --name-only");
    return {
      response: shell.response,
      error: shell.error,
      files: shell.response ? shell.response.trim().split('\n').filter(f => f) : [],
      git: this
    };
  }

  // Status completo (mostra tudo)
  status() {
    const shell = new CommandShell("git status --porcelain");
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }

  // Lista apenas arquivos modificados/adicionados
  addedFiles() {
    const shell = new CommandShell("git status --porcelain");
    const files = [];

    if (shell.response) {
      const lines = shell.response.trim().split('\n');
      lines.forEach(line => {
        if (line.startsWith('A ') || line.startsWith('M ')) {
          files.push(line.substring(3)); // Remove o prefixo "A " ou "M "
        }
      });
    }

    return {
      response: shell.response,
      error: shell.error,
      files: files,
      git: this
    };
  }

  commit(message) {
    const shell = new CommandShell(`git commit -m "${message}"`);
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }
}