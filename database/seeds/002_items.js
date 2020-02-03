
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
      { id: 1, 
        item_name:'Roomba', 
        description:'Does the cleaning for you',
        user_id: 2,
        availability: true,
        daily_rate: 20,
        condition: "Great",
        location: 'LA'
      },
      { id: 2, 
        item_name:'XXL Megaphone', 
        description:'Obnoxiously loud ',
        user_id: 1,
        availability: true,
        daily_rate: 15,
        condition: "It works",
        location: 'LA'
      }
      ]);
    });
};
