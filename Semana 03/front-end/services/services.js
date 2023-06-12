const axios = require('axios');

module.exports = class Services {
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/tarefas/Cadastrar',
      method: 'POST',
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!"
    res.render("mensagem",{mensagem})
  }
  static async TarefaListar(req, res) {
    const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/tarefas',
      method: 'GET',
      data: {}
    };
    axios(options)
    .then(response => {
      console.log(response.data);
      const tarefa = response.data;
      res.render('tarefas/listar', {tarefa});
    });
  }
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/tarefas/'+valores.id_tarefa,
      method: 'PUT',
      data: valores
    }
    axios(options);
    const mensagem = 'Registro atualizado com sucesso!';
    res.render('mensagem', {mensagem});
  }
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
      const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/tarefas/'+id_tarefa,
      method: 'DELETE'
    }
    axios(options);
    const mensagem = 'Tarefa excluida com sucesso!';
    res.render('mensagem', {mensagem});
  }

static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/usuarios/Cadastrar',
      method: 'POST',
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!"
    res.render("mensagem",{mensagem})
  }
  static async UsuarioListar(req, res) {
    const options = {
      url: 'https://lista-tarefas.danielcupertino.repl.co/usuarios',
      method: 'GET',
      data: {}
    };
    axios(options)
    .then(response => {
      console.log(response.data);
      const usuario = response.data;
      res.render('usuarios/listar', {usuario});
    });
  }










  
}