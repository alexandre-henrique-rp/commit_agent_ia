import 'dotenv/config';
import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';

export class IaGemini {
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  }
  #trainingData = '';

  #loadMarkdownFile(filePath) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      this.#trainingData = `\n\n--- Arquivo: ${filePath} ---\n${fileContent}`;
      return this;
    } catch (error) {
      console.error('Erro ao ler arquivo:', error);
      return error;
    }
  }

  async geral(prompt){
    const response = await this.model.generateContent(prompt);
    return response.response.text();
  }
}