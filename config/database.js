const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('gestaoApp_db', 'usuario', '331388', {
  host: 'localhost',
  dialect: 'mysql'
});

// Hook global para transformar strings em maiúsculas
sequelize.addHook('beforeSave', (instance) => {
  console.log(`Hook chamado para modelo: ${instance.constructor.name}`);
  // Itera sobre os atributos do modelo
  Object.keys(instance.dataValues).forEach((field) => {
    // Verifica se o campo é uma string
    if (instance.rawAttributes[field].type === DataTypes.STRING) {
      const value = instance.getDataValue(field);
      if (typeof value === 'string') {
        instance.setDataValue(field, value.toUpperCase()); // Transforma para maiúsculas
      }
    }
  });
});

sequelize.authenticate()
.then(() => console.log('Conexão com o banco bem-sucedida!'))
.catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;