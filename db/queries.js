const knex = require("./knex");

module.exports = {

  getUsers: function() {
    return knex("users");
  },

  getUser: function(id) {
    return knex("users").where('id', id).first();
  },

  getUserGames: function(id) {
    return knex('users')
        .join('games', "users.id", 'games.user_id')
        .select("users.id as user_id", "users.is_active","games.id as game_id", "users.created_at", "users.email", "users.password", "games.title", "games.esrb", "games.rating", "games.description").where("users.id", id);
  },



  createGames: function(game) {
    return knex("games").insert(game, "*");
  }

}
