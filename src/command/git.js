const { CommandShell } = require("./shell.js");

/**
 * Classe que representa o comando git
 * @class
 * @property {add} add - Instância do comando add
 * @property {staged} staged - Instância do comando staged
 * @property {status} status - Instância do comando status
 * @property {commit} commit - Instância do comando commit
 */
class CommandGit {
  constructor() { }
  /**
   * Adiciona arquivos ao staging area
   * @returns {Object} - Objeto com a resposta e o erro
   */
  add() {
    const shell = new CommandShell("git add .");
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }

  /**
   * Lista arquivos no staging area (adicionados)
   * @returns {Object} - Objeto com a resposta e o erro
   */
  staged() {
    const shell = new CommandShell("git diff --staged");
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }

  /**
   * Lista o status do git
   * @returns {Object} - Objeto com a resposta e o erro
   */
  status() {
    const shell = new CommandShell("git status");
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }

  /**
   * Comita as alterações
   * @param {string} message - Mensagem do commit
   * @returns {Object} - Objeto com a resposta e o erro
   */
  commit(message) {
    const shell = new CommandShell(`git commit -m "${message}"`);
    return {
      response: shell.response,
      error: shell.error,
      git: this
    };
  }
}

module.exports = { CommandGit };