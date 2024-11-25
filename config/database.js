const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestaoApp_db', 'usuario', '331388', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log('Conexão com o banco bem-sucedida!'))
.catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;