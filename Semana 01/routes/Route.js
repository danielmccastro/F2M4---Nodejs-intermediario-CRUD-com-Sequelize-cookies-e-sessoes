var express = require('express');
var router = express.Router();

var estados = ['Bahia', 'Espirito Santo', 'Rio de Janeiro', 'Sao Paulo']

router.get('/', (req, res) => {
  res.render("index");
});

router.get('/listar', (req, res) => {
  return res.json(estados)
});

router.get('/estado', (req, res) => {
  res.render("form");
})
router.post('/estado/cadastrar', (req, res) => {
  let nome = req.body.nome;
  estados[(estados.length)] = nome;
  return res.json([estados[estados.length-1]])
})

module.exports = router;