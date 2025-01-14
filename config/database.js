const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('gestaoApp_db', 'usuario', '331388', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.addHook('beforeSave', (instance) => {
  console.log(`Hook chamado para modelo: ${instance.constructor.name}`);
  Object.keys(instance.dataValues).forEach((field) => {
    if (instance.rawAttributes[field].type === DataTypes.STRING) {
      const value = instance.getDataValue(field);
      if (typeof value === 'string') {
        instance.setDataValue(field, value.toUpperCase());
      }
    }
  });
});

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;