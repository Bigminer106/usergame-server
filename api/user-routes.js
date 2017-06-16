const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get("/users", (req, res) => {
  queries.getUsers().then(users => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  queries.getUser(req.params.id).then(users => {
    res.json(users);
  });
});

router.get("/users/:id/games", (req, res) => {
  queries.getUserGames(req.params.id).then(users => {
    res.json(users);
  });
});

router.post("/users/:id/games", (req, res) => {
  queries.createGames(req.body).then(users => {
    res.json(users);
  });
});



module.exports = router;
