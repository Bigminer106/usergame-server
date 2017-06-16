exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE games RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('games').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
