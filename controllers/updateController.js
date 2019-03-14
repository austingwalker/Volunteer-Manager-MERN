const db = require("../models");

// Defining methods for the updateController
module.exports = {

  update: function(req, res) {
    db.Volunteer
      .findOneAndUpdate({ _id: req.body.ID }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
 
};