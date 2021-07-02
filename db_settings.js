const config = require('config')
const db_credentials = config.get('db_credentials');
const db_structure = config.get('db_struct');
const { Sequelize, Op } = require('sequelize');

const sequelize = new Sequelize(db_credentials.db, db_credentials.user, db_credentials.password, {
  host: db_structure.host,
  dialect: db_structure.dialect,
  operatorsAliases: db_structure.operatorsAliases,
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
}

module.exports = db;