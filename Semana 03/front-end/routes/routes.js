const express = require('express');
const Services = require('../services/services');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Seja bem-vindo ao nosso sistema de Tarefas e de Usuarios!')
});
router.get('/tarefas/cadastrar', (req, res) => {
  res.render('tarefas/cadastrar');
});
router.post('/tarefas/Create', Services.TarefaCreate);
router.get('/tarefas/listar', Services.TarefaListar);
router.get('/tarefas/Atualizar/:id_tarefa/:titulo/:descricao', (req, res) => {
  let tarefas = {
    id_tarefa: req.params.id_tarefa,
    titulo: req.params.titulo,
    descricao: req.params.descricao
  }
  res.render('tarefas/update', {tarefas})
});
router.post('/tarefas/Update', Services.TarefaUpdate);
router.post('/tarefas/Delete', Services.TarefaDelete);


router.get('/usuarios/cadastrar', (req, res) => {
  res.render('usuarios/cadastrar');
});
router.post('/usuarios/Create', Services.UsuarioCreate);
router.get('/usuarios/listar', Services.UsuarioListar);


module.exports = router;