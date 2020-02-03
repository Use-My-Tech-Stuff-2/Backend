
exports.up = function(knex) {
    return knex.schema
    .createTable('items', item => {
        item.increments();
        item
          .string('item_name', 18)
          .notNullable();
        item.
          string('description', 256)
          .notNullable();
        item.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        item.boolean('availability').defaultTo(false);
        item.integer('daily_rate');
        item.string('condition', 18).notNullable();
        item.string('location', 18).notNullable();
  
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
