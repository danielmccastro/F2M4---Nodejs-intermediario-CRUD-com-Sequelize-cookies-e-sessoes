const Tarefa = require('../model/tarefaModel');

module.exports = class tarefaController {
  static async TarefaCreate (req, res) {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    const tarefa = {
      titulo: titulo,
      descricao: descricao
    };
    await Tarefa.create(tarefa);
    res.json({message: "Tarefa cadastrada com sucesso!"})
  }
  static async TarefaListar (req, res) {
    const id_tarefa = req.params.id;
    if (id_tarefa) {
      const tarefa = await Tarefa.findOne({where: {id_tarefa: id_tarefa}});
      res.json(tarefa);
    } else {
      const tarefa = await Tarefa.findAll({raw: true});
      res.json(tarefa);
    }
  }
  static async TarefaUpdate(req, res) {
    const id_tarefa = req.params.id;
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    const tarefa = {
      titulo: titulo,
      descricao: descricao
    };
    await Tarefa.update(tarefa, {where: {id_tarefa: id_tarefa}});
    res.json({message: "Tarefa atualizada com sucesso! Foram atualizadas as seguintes informacoes: ", dados: tarefa});
  }
  static async TarefaDelete (req, res) {
    const id_tarefa = req.params.id;
    await Tarefa.destroy({where: {id_tarefa: id_tarefa}});
    res.json({message: "Tarefa excluida com sucesso!"});
  }
}