import knex from 'knex';
const knexfile = require('../../knexfile.ts');

const connection = knex(knexfile)

export default connection;