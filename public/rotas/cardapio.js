import express from 'express';

const dados = [
  {
    id: 1,
    nome: 'Café Cappuccino',
    descricao: 'Um café cremoso e saboroso, perfeito para desfrutar em qualquer momento do dia.',
    imagem: '/Imagens/cappuccino.jpg'
  },
  {
    id: 2,
    nome: 'Café Expresso',
    descricao: 'Um café intenso e encorpado, ideal para quem aprecia um sabor marcante.',
    imagem: '/Imagens/expresso.jpg'
  }
];

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(dados);
});

export default router;