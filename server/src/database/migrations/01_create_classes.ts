import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("classes", (tb) => {
    tb.increments("id").primary();
    tb.string("subject").notNullable();
    tb.decimal("cost").notNullable();

    tb.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE") // Caso o id for mudado, tudo será updateado do id
      .onDelete("CASCADE"); // Caso for apagado, tudo será deletado do id
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
