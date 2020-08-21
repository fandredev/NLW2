import knex from 'knex';
import path from 'path';

import dotenv from 'dotenv';

dotenv.config();
const { DB_CLIENT } = process.env;

const db = knex({
  client: DB_CLIENT,
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true, // Null por default pra um campo no db
});

export default db;
