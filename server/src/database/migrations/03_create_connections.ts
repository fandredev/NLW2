import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (tb) => {
    tb.increments("id").primary();
    tb.timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
    tb.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE") // Caso o id for mudado, tudo será updateado do id
      .onDelete("CASCADE"); // Caso for apagado, tudo será deletado do id
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
