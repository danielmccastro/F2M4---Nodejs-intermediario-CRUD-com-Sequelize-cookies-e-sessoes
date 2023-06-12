const axios = require("axios");
module.exports = class Services{
//LOGIN FUNCIONARIO 
  static async FuncionarioLogin(req,res){
    let valores = req.body;
    const options = {
      url: 'https://apilivraria.danielcupertino.repl.co/login',
      method: 'POST',
      data: valores
    };
    axios(options).then((funcionario) => {
      if(funcionario != undefined){
        return res.render('logado');
      }
    })
  }
//CREATE FUNCIONARIO
  static async FuncionarioCreate(req,res){
    let valores = req.body;
    const options = {
      url: 'https://apilivraria.danielcupertino.repl.co/add_funcionario',
      method: 'POST',
      data: valores
    };
  axios(options);
  const mensagem = "Cadastro realizado com sucesso!";
  res.render("mensagem",{mensagem});
  }
//CREATE LIVROS
  static async LivroCreate(req,res){
    let valores = req.body;
    const options = {
      url: 'https://apilivraria.danielcupertino.repl.co/add_livros',
      method: 'POST',
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem",{mensagem});
  }
//LISTAR LIVROS
  static async LivroListar(req,res){
    const options = {
      url: 'https://apilivraria.danielcupertino.repl.co/livros',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
    console.log(response.data);
    const livro = response.data
    res.render("livros/listar", {livro});
    });
  }
}