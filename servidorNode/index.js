const express = require('express')
const app = express();

const PORT = 3000;

app.get('/',(req, res) => {
    res.send('Olá!😀 O Servidor node está rodandi!');
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})