import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (tb) => {
    tb.increments('id').primary();
    tb.integer('week_day').notNullable();
    tb.integer('from').notNullable();
    tb.integer('to').notNullable();

    tb.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE') // Caso o id for mudado, tudo será updateado do id
      .onDelete('CASCADE'); // Caso for apagado, tudo será deletado do id
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
