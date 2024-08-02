import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "postgres",
      user: "postgres",
      password: "9830",
    }
  }
};

export default config;