import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (tb) => {
    tb.increments("id").primary();
    tb.string("name").notNullable();
    tb.string("avatar").notNullable();
    tb.string("whatsapp").notNullable();
    tb.string("bio").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
