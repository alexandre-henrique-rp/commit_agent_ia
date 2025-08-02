const { execSync } = require("child_process");

class CommandShell {
  constructor(command) {
    this.#command = command;
    this.#execute();
  }
  #command;
  #response = null;
  #error = null;

  #execute() {
    try {
      const stdout = execSync(this.#command, { encoding: 'utf8' });
      this.#response = stdout;
      return stdout;
    } catch (error) {
      console.error(`exec error: ${error}`);
      this.#error = error;
    }
  }

  get response() {
    return this.#response;
  }

  get error() {
    return this.#error;
  }
}

module.exports = { CommandShell };