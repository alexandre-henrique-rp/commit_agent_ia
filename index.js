import { CommandGit } from "./src/command/git.js";
import { IaGemini } from "./src/command/gemini.js";
import fs from 'fs';

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
     const listFilesStatus = gemini.geral(`crie uma lita de path de arquivos com base na resposta do git addedFiles, adicionando a base do projeto, deixando como exemplo: ["local/arquivo1", "local/arquivo2"], o retorno deve ser somente o array se a lista for vazia retorne [] => listFiles:${listFiles.response}, base do projeto: ${local}`);

     if (listFilesStatus === '[]') {
      console.log('Nenhum arquivo modificado');
      return;
     }
     const listFilesArray = JSON.parse(listFilesStatus);

     const ResumeLst = []
     listFilesArray.forEach(file => {
      const contentFile = fs.readFileSync(file, 'utf-8');
      if(!contentFile.trim()){
        console.log(`Arquivo vazio: ${file}`);
        continue;
      }
      const pronpt = `faça um resumo o que foi alterado nesse arquivo => ${contentFile}`
        





     }
      // fazer a ia ler os arquivos e me retornar o que foi modificado
     const readFiles = gemini.geral(`leia os arquivos e me retorne o que foi modificado => ${listFilesStatus}`);
     console.log(readFiles);
     
}

main();
