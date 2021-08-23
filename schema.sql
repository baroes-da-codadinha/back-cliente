/* CRIAÇÃO DO DB */
CREATE DATABASE desafio_final;

/* CRIAÇÃO DAS TABELAS */
DROP TABLE IF EXISTS consumidor;

CREATE TABLE consumidor (
  id serial NOT NULL PRIMARY KEY,
  nome varchar(100) NOT NULL,
  email varchar(100) NOT NULl UNIQUE,
  senha text NOT NULL,
  telefone text NOT NULL
);

DROP TABLE IF EXISTS pedidos;

CREATE TABLE pedido (
  id serial NOT NULL PRIMARY KEY,
  consumidor_id integer NOT NULL,
  restaurante_id integer NOT NULL,
  taxa integer DEFAULT 0,
  endereco varchar(100) NOT NULL,
  total integer NOT NULL,
  FOREIGN KEY (consumidor_id) REFERENCES consumidor (id),
  FOREIGN KEY (restaurante_id) REFERENCES restaurantes (id)
);

DROP TABLE IF EXISTS carrinho;

CREATE TABLE carrinho (
  id serial NOT NULL PRIMARY KEY,
  consumidor_id integer NOT NULL,
  produto_id integer NOT NULL,
  nome_produto varchar(60) NOT NULL,
  preco integer NOT NULL,
  quantidade integer NOT NULL,
  FOREIGN KEY (consumidor_id) REFERENCES consumidor (id),
  FOREIGN KEY (produto_id) REFERENCES produtos (id)
);

DROP TABLE IF EXISTS endereco;

CREATE TABLE endereco (
  id serial NOT NULL PRIMARY KEY,
  consumidor_id integer NOT NULL,
  cep varchar(8) NOT NULL,
  endereco varchar(100) NOT NULl,
  complemento varchar(100),
  FOREIGN KEY (consumidor_id) REFERENCES consumidor (id)
);
