// Importações dos módulos necessários

import express from 'express'; // Importa o módulo Express.js
import dotenv from 'dotenv'; // Importa o módulo dotenv para gerenciar variáveis de ambiente
import mustache from 'mustache-express'; // Importa a engine de visualização Mustache
import path from 'path'; // Importa o módulo path para trabalhar com caminhos de arquivos

// Carrega variáveis de ambiente a partir de um arquivo .env

dotenv.config();

// Cria uma instância do servidor Express

const server = express();

// Configura a engine de visualização Mustache

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Define a pasta onde os recursos estáticos (como arquivos CSS, JavaScript e imagens) serão servidos

server.use(express.static(path.join(__dirname, '../public')));

// Rotas

// Inicia o servidor na porta especificada no arquivo .env

server.listen(process.env.PORT);
