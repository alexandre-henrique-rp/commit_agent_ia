import { CommandGit } from "./src/command/git.js";
import { IaGemini } from "./src/command/gemini.js";
import fs from 'fs';

async function main() {
  try {
    console.log('Iniciando o agente de IA para commit');
    const git = new CommandGit();
    const gemini = new IaGemini();

    // Identificar o local que o comando foi chamado
    const local = process.cwd();
    console.log(`Local: ${local}`);

    // git status
    console.log('Verificando status do git...');
    const status = await git.status();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // git add . (adicionar antes de verificar staged)
    console.log('Adicionando alterações...');
    const add = await git.add();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // git diff --staged (verificar alterações após adicionar)
    console.log('Verificando alterações no stage...');
    const diff = await git.staged();

    await new Promise(resolve => setTimeout(resolve, 2000));

    // Verificar se há alterações para commit
    if (!diff.response || diff.response.trim() === '') {
      console.log('Nenhuma alteração encontrada para commit.');
      return;
    }

    // Gerar commit com IA
    console.log('Gerando mensagem de commit...');
    const treinamento = fs.readFileSync('./src/trenamento/commit.md', 'utf-8');
    const prompt = `Com base no treinamento abaixo, crie uma mensagem de commit para as alterações do repositório:

Treinamento: ${treinamento}

Alterações: ${diff.response}

Status: ${status.response}`;

    const commitText = await gemini.geral(prompt);

    // git commit
    console.log(`Commitando alterações:\n\n${commitText}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const commit = await git.commit(commitText);

    console.log(`Commit realizado com sucesso:\n\n${commit.response}`);
    console.log(`Agora execute: git push`);

  } catch (error) {
    console.error('Erro durante a execução:', error);
    process.exit(1);
  }
}

main();