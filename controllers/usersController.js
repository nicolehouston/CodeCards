const db = require("../models");

// Defining methods for the usersController
module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.User
      .find({ username: req.params.name })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveCategory: function(req, res) {
    const update = { $push: { categories: req.body.category } };
    db.User
      .update({ username: req.body.username }, update, { upsert: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addInfoCard: function (req, res) {
    const update = { $push: { levelOne: req.body.infoCard } };
    db.User
      .update({ username: req.body.username }, update, { upsert: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteCategory: function (req, res) {
    const update = { $pull: { categories: req.body.category } };
    db.User
      .update({ username: req.body.username }, update, { upsert: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};