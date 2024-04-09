//Fazer a importação do express
const express = require('express');

//Rotas (quando o servidor for acessado, pra onde ele vai???)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá turma de ADS!!!');
});

//Configurações básicas do aplicativo
const app = express();
app.use('/',router);

module.exports = app; //exportando o app, pois iremos importa-lo no servidor
