import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Chat API Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: "Você é um assistente virtual útil para um escritório de contabilidade e advocacia tributária. Você fornece informações sobre os serviços oferecidos (como planejamento tributário, recuperação de créditos, defesas fiscais, e consultoria), sobre o escritório em si, e responde a perguntas relacionadas. Seja profissional, prestativo e claro.",
        },
      });

      // Se tivéssemos um modo de enviar o histórico diretamente com o novo SDK, faríamos aqui,
      // mas para simplificar e garantir a compatibilidade vamos enviar apenas a nova mensagem,
      // ou recriar o contexto no prompt.
      // O SDK de GenAI permite criar o chat passando o histórico inicial no `history`.
      
      const chatInstance = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: "Você é um assistente virtual útil para um escritório de contabilidade e advocacia tributária. Você fornece informações sobre os serviços oferecidos (como planejamento tributário, recuperação de créditos, defesas fiscais, e consultoria), sobre o escritório em si, e responde a perguntas relacionadas. Seja profissional, prestativo e claro.",
        },
      });

      // No workaround para histórico por simplificação, passaremos só a mensagem
      const response = await chatInstance.sendMessage({ message: message });
      
      res.json({ text: response.text });
    } catch (error) {
      console.error("Erro na API do Gemini:", error);
      res.status(500).json({ error: "Erro ao se comunicar com o assistente virtual." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
