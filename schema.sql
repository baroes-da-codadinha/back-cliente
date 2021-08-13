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