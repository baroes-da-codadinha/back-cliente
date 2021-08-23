const express = require('express');
const cadastrarConsumidor = require('./controladores/consumidor');
const { listarRestaurantes, listarProdutosRestaurantes } = require('./controladores/restaurantes');
const { login } = require('./controladores/login');
const verificarLogin = require('./filtros/verificarLogin');
const cadastrarCarrinho = require('./controladores/carrinho');
const { obterEndereco, cadastrarEndereco } = require('./controladores/endereco');

const rotas = express();

// CADASTRO CONSUMIDOR
rotas.post('/consumidor', cadastrarConsumidor)

// LOGIN
rotas.post('/login', login);

// MIDDLEWARE QUE VERIFICA LOGIN
rotas.use(verificarLogin);

// RESTAURANTES
rotas.get('/restaurantes/:id', listarProdutosRestaurantes);
rotas.post('/restaurantes', listarRestaurantes);
rotas.post('/carrinho/:id', cadastrarCarrinho);
rotas.get('/endereco', obterEndereco);
rotas.post('/endereco', cadastrarEndereco);



module.exports = rotas;