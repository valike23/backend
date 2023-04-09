import { Sequelize } from "sequelize";
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = process.env;

export const sequelize = new Sequelize(DB_NAME || 'muxidb',
 DB_USER || 'root', DB_PASSWORD || '', {
    host: DB_HOST || 'localhost',
    dialect: 'mysql',
  });

  async function main() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  main();