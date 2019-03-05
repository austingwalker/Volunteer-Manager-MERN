const db = require("../models");

// Defining methods for the booksController
module.exports = {

    
  find: function(req, res) {

    const {email, password } = req.body;

    db.Signup
      .findOne({email: email}, (err, user) => {
          if(err){
              return err
          }
          if(!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
          }
          if(!user.checkPassword(password)) {
            res.status(401).send({success: false, msg: 'Authentication failed. Password incorrect.'});
          }
          return user
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
 
};