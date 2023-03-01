// 1 - Importar o express
const express = require('express');
const path = require('path');
const registraRequisicao = require('./middlewares/registraRequisicao');
const router = require('.router');

// 2 - Criar o servidor
const servidor = express();
servidor.set('view engine', 'ejs');

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));
servidor.use(express.urlencoded({ extended: false }));

// Define a pasta public como sendo a pasta de arquivos estáticos
servidor.use(express.static(patch.join(__dirname, 'public')))
servidor.use(express.urlencoded({ extended:false }));

// Configurando middlewares
servidor.use(registraRequisicao);

// 3 - Definir roteador a ser executado
servidor.use(router);

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);