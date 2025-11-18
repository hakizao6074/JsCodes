const express = require('express')
const app = express();

const PORT = 3000;

app.get('/',(req, res) => {
    res.send('Olá!😀 O Servidor node está rodandi!');
})
app.get('/pagina2',(req, res) => {
    res.send('parabens vc acabou de acessar a segunda rota!');
})
app.get('/pagina3',(req, res) => {
    res.send('parabens vc acabou de acessar a terceira rota!');
})
app.get('/pagina4',(req, res) => {
    res.send('parabens vc acabou de acessar a ultima rota!');
})
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})