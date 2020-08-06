import path from "path";
import dotenv from "dotenv";
dotenv.config();

const { DB_CLIENT } = process.env;
module.exports = {
  client: DB_CLIENT,
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
