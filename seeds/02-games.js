exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE games RESTART IDENTITY CASCADE;')
  .then(function () {
    return knex('games').insert([
      {
        title: 'Metal Gear Solid',
        description: 'A secret agent must complete his mission, no matter the cost',
        esrb: 'Teen',
        rating: 8,
        user_id: 1
      },
      {
        title: "Assassin's Creed IV: Black Flag",
        description: 'A young pirate seeks fame and fortune on the high seas',
        esrb: 'Teen',
        rating: 10,
        user_id: 2
      },
      {
        title: 'Resident Evil 5',
        description: 'A group of survivors must make their way in a zombie apocalypse',
        esrb: 'Mature',
        rating: 8,
        user_id: 3
      },
      {
        title: 'Mass Effect 3',
        description: 'Commander Shepard must unite the galaxy against a common enemy',
        esrb: 'Mature',
        rating: 9,
        user_id: 2
      },
      {
        title: "Sid Meier's Civilization IV",
        description: '',
        esrb: 'Everyone',
        rating: 9,
        user_id: 3
      },
      {
        title: 'Metal Gear: Rising',
        description: '',
        esrb: 'Mature',
        rating: 8,
        user_id: 1
      },
      {
        title: 'Hitman',
        description: 'Take down your targets',
        esrb: 'Mature',
        rating: 8,
        user_id: 3
      },
      {
        title: 'Super Mario',
        description: 'A platformer retro game.',
        esrb: 'E',
        rating: 8.5,
        user_id: 1
      },
      {
        title: 'Mortal Kombat 9',
        description: 'A versus mode game',
        esrb: 'M',
        rating: 8.5,
        user_id: 2
      }
    ]);
  });
};
