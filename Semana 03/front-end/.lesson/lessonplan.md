views/usuarios
---------------
Cadastrar.handlebars

<h1 class="text-center my-3">Login</h1>
<form action="/usuarios/Cadastrar" method="post">
  <div class="row w-50 d-block m-auto g-3">
    <div class="col-12">
      <label class="form-label" for="nome">Nome:</label>
      <input
        class="form-control"
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite o seu Nome"
      />
    </div>
    <div class="col-12">
      <label class="form-label" for="email">Email:</label>
      <input
        class="form-control"
        type="text"
        name="email"
        id="email"
        placeholder="Digite o seu Email"
      />
    </div>
    <div class="col-12">
      <label class="form-label" for="senha">Senha:</label>
      <input
        class="form-control"
        type="password"
        name="senha"
        id="senha"
        placeholder="Digite a sua senha"
      />
    </div>
    <div>
      <input class="btn btn-primary my-3" type="submit" value="Cadastrar Usuário" />
    </div>
  </div>
</form>

views/usuarios
---------------
listar.handlebars
<h1 class="text-center my-3">Lista de usuários</h1>
<table class="table">
  <div class="row">
    <div class="col-12">
      <thead>
        <th>Código do usuário</th>
        <th>Nome</th>
        <th>Email</th>
      </thead>
      <tbody>
        {{#each usuario}}
          <tr>
            <th>{{this.id_usuario}}</th>
            <th>{{this.nome}}</th>
            <th>{{this.email}}</th>
          </tr>
        {{/each}}
      </tbody>
    </div>
  </div>
</table>

Arquivo services.js
---------------------
const axios = require("axios");
var cookie = require('cookie-parser');
module.exports = class Services{

  //LISTAR
  static async TarefaListar(req,res){
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/tarefas/1',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const tarefa =response.data

      res.render("tarefas/listar",{tarefa});
    });
  }
//Create
  static async TarefaCreate(req,res){
    let valores = req.body;
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/tarefas/Cadastrar',
      method: 'POST',
      data: valores 
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem",{mensagem});
  }
//Update
  static async TarefaUpdate(req,res){
    
    let valores = req.body;
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/tarefas/'+valores.id_tarefa,
      method: 'PUT',
      data: valores 
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem",{mensagem});
  }
 //Delete
  static async TarefaDelete(req,res){
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/tarefas/'+id_tarefa,
      method: 'DELETE'
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem",{mensagem});
  }
  //Create
  static async UsuarioCreate(req,res){
    let valores = req.body;
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/usuarios/cadastrar',
      method: 'POST',
      data: valores 
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem",{mensagem});
  }
  //Create
  static async UsuarioVerificar(req,res){
    let valores = req.body;
    const logado = "";
    const options =  {
      url: 'https://listatarefas.antonioizo.repl.co/usuarios/logar',
      method: 'POST',
      data: valores 
    };
      axios(options).then( response => {
      const logado = response.data;
        console.log(logado);

       //criar cookies
       let usuario ={
            id_usuario: logado.dadosUser.id_usuario,
            nome: logado.dadosUser.nome
       }
       res.cookie("usuarios", usuario);
        
       res.render("tarefas/listar",{usuario});
      }).catch(function(error){
        if(error){

        }
      })
    
  }

//LISTAR
  static async UsuarioListar(req,res){
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/usuarios',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const usuario =response.data

      res.render("usuarios/listar",{usuario});
    });
  }
//Create usuário
  static async UsuarioCreate(req,res){
    let valores = req.body;
    const options = {
      url: 'https://listatarefas.antonioizo.repl.co/usuarios/Cadastrar',
      method: 'POST',
      data: valores 
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem",{mensagem});
  }  
}

Arquivo routes.js
------------------
const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/",(req, res) =>{
    res.send("Seja bem Vindo ao nosso sistema de Tarefas.");
})
router.get("/tarefas/cadastrar",(req, res) =>{
  res.render("tarefas/cadastrar");
})

//ROTA PARA SERVIÇO DE CREATE
router.post("/tarefas/Create",Services.TarefaCreate);

//ROTA PARA O SERVIÇO LISTAR
router.get("/tarefas/listar",Services.TarefaListar);
//ROTA PARA O FORMULÁRIO UPDATE
router.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao",(req, res) =>{
 
  let tarefas = {
    id_tarefa : req.params.id_tarefa,
    titulo : req.params.titulo,
    descricao : req.params.descricao
  } 
  res.render("tarefas/update",{tarefas});
})
router.post("/tarefas/Update",Services.TarefaUpdate);

//ROTA PARA O SERVIÇO DE DELETE
router.post("/tarefas/Delete",Services.TarefaDelete); 

///ROTAS SERVIÇOS USUÁRIOS

router.get("/usuarios/listar",Services.UsuarioListar);
router.get("/usuarios/Cadastrar",(req, res) =>{
  res.render("usuarios/Cadastrar");
})    
router.post("/usuarios/Cadastrar",Services.UsuarioCreate);

module.exports=router;

Arquivo main.handlebars
------------------------
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     {{! BOOSTRAP 5 }}
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
{{!-- ARQUIVOS LOCAL --}}
    <link rel="stylesheet" href="css/styles.css" />
    <title>Sistema de Lista de Tarefas</title>
  </head>
  <body id="body-mobile">
    <nav class="navbar text-bg-dark">
      <div class="container">
        <span class="navbar-brand text-white">Sistema de Tarefas</span>
        <ul class="navbar nav">
          <li class="nav-item">
          </li>          
          <li class="nav-item">
            <a class="nav-link text-white" href="/tarefas/listar">Listar Tarefas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/usuarios/listar">Listar Usuários</a>
          </li>          
          <li class="nav-item">
            <a class="nav-link text-white" href="/tarefas/cadastrar">Cadastrar Tarefa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/usuarios/Cadastrar">Cadastrar usuário</a>
          </li>          
        </ul>
      </div>
    </nav>
    <div class="container">
      {{{body}}}
    </div>
  </body>
</html>

arquivo index.js
--------------------
const express = require("express");
const app = express();
const hand = require("express-handlebars");
const Services = require("./services/services");
const routes = require("./routes/routes");

app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true,}));
app.use(express.json());

app.use("/", routes);

app.listen(3000);

