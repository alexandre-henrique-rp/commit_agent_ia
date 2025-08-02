import { CommandGit } from "./src/command/git.js";
import { IaGemini } from "./src/command/gemini.js";


async function main() {
    console.log('Iniciando o agente de IA para commit');
    const git = new CommandGit();
    const gemini = new IaGemini();
    //identificar o local que o comando foi chamado
    const local = process.cwd();
    console.log(`Local: ${local}`);
    
    const add = git.add();
    const addStatus = gemini.geral(`verifique o retorno do git add e me retorne true ou false => ${add.response}`);
     if(addStatus === 'false'){
      const error = gemini.geral(`explique o erro do git add => ${add.response}`);
      console.log(error);
      return;
     }
     const listFiles = git.addedFiles();
}

main();
