
const express = require("express");
const router = express.Router();

const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

router.get("/",(req, res) =>{
  return res.json({message: "Sistema de Cadastros"});
})

//POST - CADASTRAR
router.post("/add_funcionario", funcionarioController.FuncionarioCreate);
//GET - LISTAR
router.get("/funcionario/:id?", funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);

//POST - CADASTRAR
router.post("/add_livros", livroController.LivroCreate);
//GET - LISTAR
router.get("/livros/:id?", livroController.LivroListar)

module.exports = router;