exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('users').insert([
        {
          email: 'fahad@hotmail.com',
          password: '1864305'
        },
        {

          email: 'adam@whatevs.com',
          password: 'password'
        },
        {
          email: 'cj@gmail.com',
          password: 'youaregr8'
        }
      ]);
    });
};
