const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const tarefaController = require('../controller/tarefaController');

router.get('/', (req, res) => {
  return res.json({message: 'Sistema de Lista de Tarefas'});
})

router.post('/usuarios/Cadastrar', usuarioController.UsuarioCreate);
router.get('/usuarios/:id?', usuarioController.UsuarioListar);
router.put('/usuarios/:id', usuarioController.UsuarioUpdate);
router.delete('/usuarios/:id', usuarioController.UsuarioDelete);

router.post('/tarefas/Cadastrar', tarefaController.TarefaCreate);
router.get('/tarefas/:id?', tarefaController.TarefaListar);
router.put('/tarefas/:id', tarefaController.TarefaUpdate);
router.delete('/tarefas/:id', tarefaController.TarefaDelete);

module.exports = router;