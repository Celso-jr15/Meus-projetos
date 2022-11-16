const express = require('express')
const axios  = require('axios')

const app = express()

app.listen('3000')

//transforma em JSON a Req e Res
app.use(express.json())

let author = "Celso"

//app.route('/').get( (req,res) => res.send("Hello") )
//app.route('/').post( (req,res) => res.send(req.body))

/*app.route('/').put( (req, res) => {
    author = req.body
    res.send(author)
})
*/
/*
app.route('/').post( (req,res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})
*/
/* Colocando Parametros no /
app.route('/').get( (req,res) => res.send("Home") )
app.route('/:nome').get( (req,res) => res.send(req.params.nome))
*/

/*
// Colocando Parametros no /
app.route('/').get( (req,res) => res.send(req.query.nome))

app.route('/sobre/jr').get ((req,res) => res.send(req.query))
//app.route('/sobre/jr').get ((req,res) => res.send(req.query.id))
*/

app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/Celso-jr15')
    //.then(result => res.send(result.data))
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})
