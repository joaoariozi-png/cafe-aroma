const cardapio = [
  {
    id: 1,
    nome: 'Cappuccino',
    descricao: 'Leite vaporizado, espuma cremosa e muito sabor.',
    preco: 18.5,
    categoria: 'Bebidas',
    imagem: '../IMG/cappuccino.jpg'
  },
  {
    id: 2,
    nome: 'Chocolate Quente',
    descricao: 'Cremoso, quente e perfeito para dias frios.',
    preco: 16,
    categoria: 'Bebidas',
    imagem: '../IMG/chocolate.jpg'
  },
  {
    id: 3,
    nome: 'Expresso',
    descricao: 'Café intenso, encorpado e feito na hora.',
    preco: 14,
    categoria: 'Bebidas',
    imagem: '../IMG/expresso.jpg'
  },
  {
    id: 4,
    nome: 'Latte',
    descricao: 'Café suave com leite cremoso e aroma delicado.',
    preco: 19,
    categoria: 'Bebidas',
    imagem: '../IMG/cappuccino.jpg'
  },
  {
    id: 5,
    nome: 'Mocha',
    descricao: 'Café com chocolate e espuma irresistível.',
    preco: 20,
    categoria: 'Bebidas',
    imagem: '../IMG/chocolate.jpg'
  },
  {
    id: 6,
    nome: 'Americano',
    descricao: 'Café longo, equilibrado e ideal para todos os dias.',
    preco: 15,
    categoria: 'Bebidas',
    imagem: '../IMG/expresso.jpg'
  },
  {
    id: 7,
    nome: 'Croissant',
    descricao: 'Massa folhada crocante por fora e macia por dentro.',
    preco: 12,
    categoria: 'Salgados',
    imagem: '../IMG/banner.jpg'
  },
  {
    id: 8,
    nome: 'Pão de Queijo',
    descricao: 'Quentinho, crocante e cheio de sabor.',
    preco: 10,
    categoria: 'Salgados',
    imagem: '../IMG/banner.jpg'
  },
  {
    id: 9,
    nome: 'Torta de Morango',
    descricao: 'Fatia cremosa com sabor doce e refrescante.',
    preco: 17,
    categoria: 'Sobremesas',
    imagem: '../IMG/chocolate.jpg'
  },
  {
    id: 10,
    nome: 'Brownie',
    descricao: 'Chocolate intenso com textura fudgy e irresistível.',
    preco: 13,
    categoria: 'Sobremesas',
    imagem: '../IMG/chocolate.jpg'
  },
  {
    id: 11,
    nome: 'Cookie de Chocolate',
    descricao: 'Biscoito macio com gotas de chocolate ao centro.',
    preco: 11,
    categoria: 'Sobremesas',
    imagem: '../IMG/expresso.jpg'
  }
];

const container = document.getElementById('lista-cardapio');

if (container) {
  container.innerHTML = cardapio.map(item => `
    <article class="item-cardapio">
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="item-info">
        <span class="tag">${item.categoria}</span>
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <div class="rodape-item">
          <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>
          <button>Adicionar</button>
        </div>
      </div>
    </article>
  `).join('');
}
