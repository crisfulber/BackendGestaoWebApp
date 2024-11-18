// script de sincronização (por exemplo, sync.js)
const sequelize = require('./config/database');
const models = require('./models');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // use { force: false } se não quiser redefinir a base de dados
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();
