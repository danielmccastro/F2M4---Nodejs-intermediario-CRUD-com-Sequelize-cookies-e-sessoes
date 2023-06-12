const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'  
});

try {
  sequelize.authenticate();
  console.log('Banco de dados consectado com sucesso!');
}
catch (erro) {
  console.log('Erro ao conectar ao banco', erro);
}

module.exports = sequelize;