const knex = require('knex');
const config = require('../../knexfile');

const env = process.env.NODE_ENV;
const dbConfig = env === 'test' ? config.test : config.development;

const connection = knex(dbConfig);

module.exports = connection;
