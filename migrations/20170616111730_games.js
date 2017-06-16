exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('esrb').notNullable();
    table.float('rating').notNullable();
    table.text('description');
    table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
