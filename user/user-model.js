const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  allItems,
  findItemById
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function allItems(id){
  return db('items')

}

function findItemById(id){
  return db('items')
  .where({id})
  .first();
}