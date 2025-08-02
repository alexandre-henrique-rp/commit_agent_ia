require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai');

class IaGemini {
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  }

  async geral(prompt){
    const response = await this.model.generateContent(prompt);
    return response.response.text();
  }
}

module.exports = { IaGemini };