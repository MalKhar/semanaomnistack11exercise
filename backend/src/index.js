const express = require('express');  //chamando express\
const cors = require('cors'); 
const routes = require('./routes');

const app = express();  //chamando express

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);   //colocando na localhost:3333  



/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (/:)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
  