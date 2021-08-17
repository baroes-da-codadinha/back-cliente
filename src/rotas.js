const express = require('express');
const cadastrarConsumidor = require('./controladores/consumidor');
const { listarRestaurantes, listarProdutosRestaurantes } = require('./controladores/restaurantes');
const { login } = require('./controladores/login');
const verificarLogin = require('./filtros/verificarLogin');

const rotas = express();

// CADASTRO CONSUMIDOR
rotas.post('consumidor', cadastrarConsumidor)

// LOGIN
rotas.post('/login', login);

// MIDDLEWARE QUE VERIFICA LOGIN
rotas.use(verificarLogin);

// RESTAURANTES
rotas.get('/restaurantes/:id', listarProdutosRestaurantes);
rotas.post('/restaurantes', listarRestaurantes);



module.exports = rotas;