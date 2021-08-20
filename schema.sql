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

CREATE TABLE pedidos (
  id serial NOT NULL PRIMARY KEY,
  taxa integer DEFAULT 0,
  endereco varchar(100) NOT NULL,
  consumidor_id integer NOT NULL,
  restaurante_id integer NOT NULL,
  FOREIGN KEY (consumidor_id) REFERENCES consumidor (id),
  FOREIGN KEY (restaurante_id) REFERENCES restaurantes (id)
);

DROP TABLE IF EXISTS carrinho;

CREATE TABLE carrinho (
  preco integer NOT NULL,
  quantidade integer NOT NULL,
  produto_id integer NOT NULL,
  pedido_id integer NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos (id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos (id)
);

DROP TABLE IF EXISTS endereco;

CREATE TABLE endereco (
  id serial NOT NULL PRIMARY KEY,
  cep varchar(8) NOT NULL,
  endereco varchar(100) NOT NULl,
  complemento varchar(100),
  consumidor_id integer NOT NULL,
  FOREIGN KEY (consumidor_id) REFERENCES consumidor (id)
);
