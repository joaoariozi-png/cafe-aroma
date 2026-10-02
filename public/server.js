import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors()); //libera as requisições de outras origens
app.use(express.json()); //permite que o servidor entenda requisições com JSON

import cardapio from '../data/cardapio.js';

app.use(express.static(path.join(__dirname)));
app.use('/css', express.static(path.join(__dirname, '..', 'CSS')));
app.use('/img', express.static(path.join(__dirname, '..', 'IMG')));

app.get('/api/cardapio', (req, res) => {
    res.json(cardapio);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
