const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute= require('./routes/linkRoute')
const path= require('path')


mongoose.connect('mongodb://127.0.0.1:27017/newLinks');
let db = mongoose.connection;

db.on('err', () => {
    console.log('Houve um erro');
});
db.once('open', () => {
  console.log('Banco carregado');
});
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(port, () => {
    console.log('Aplicativo rodando na porta 3000');
});

