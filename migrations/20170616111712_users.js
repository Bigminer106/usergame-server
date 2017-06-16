exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('user').notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.dateTime('created_at').notNullable();
    table.boolean('is_active').notNullable().default(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
