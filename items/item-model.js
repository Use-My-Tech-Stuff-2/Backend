const db = require('../database/dbConfig');

module.exports = {
    allItems,
    findItemById
}



function allItems(id){
  return db('items')

}

function findItemById(id){
  return db('items')
  .where({id})
  .first();
}