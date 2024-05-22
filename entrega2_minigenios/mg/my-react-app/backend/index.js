// Dotenv
require("dotenv").config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// imprime a variável
console.log(OPENAI_API_KEY)

// Express
const express = require("express");
const app = express();
// JSON será o formato de dados utilizado
app.use(express.json()); 
// backend executando na porta 4000
app.listen(4000);

// CORS
const cors = require("cors");
// Segurança do cors para o objeto app
app.use(cors())
app.options('*',cors())

// OpenAI
const { OpenAI } = require("openai");
// criação do objeto da api validando o acesso com a chave fornecida
const openai = new OpenAI(OPENAI_API_KEY);

// POST
app.post("/pergunte-ao-chatgpt", async (req, res) => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.body.prompt }],
      model: "gpt-3.5-turbo",
      max_tokens: 200,
    });
    console.log(completion);
    res.send(completion.choices[0].message.content);
  });  