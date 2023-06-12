const Usuario = require('../model/usuarioModel');

module.exports = class usuarioController {
  static async UsuarioCreate (req, res) {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
    await Usuario.create(usuario);
    res.json({message: "Usuario cadastrado com sucesso!"})
  }
  static async UsuarioListar (req, res) {
    const id_usuario = req.params.id;
    if (id_usuario) {
      const usuario = await Usuario.findOne({where: {id_usuario: id_usuario}});
      res.json(usuario);
    } else {
      const usuario = await Usuario.findAll({raw: true});
      res.json(usuario);
    }
  }
  static async UsuarioUpdate(req, res) {
    const id_usuario = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
     const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
    await Usuario.update(usuario, {where: {id_usuario: id_usuario}});
    res.json({message: "Cadastro atualizado com sucesso! Foram atualizadas as seguintes informacoes: ", dados: usuario});
  }
  static async UsuarioDelete (req, res) {
    const id_usuario = req.params.id;
    await Usuario.destroy({where: {id_usuario: id_usuario}});
    res.json({message: "Usuario excluido com sucesso!"});
  }
}