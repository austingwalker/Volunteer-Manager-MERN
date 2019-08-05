const db = require("../models");
let volType;


// Defining methods for the volunteerController
module.exports = {
  discern: function (req, res){
    const routeName = req.path
    let arr = routeName.split("")
    arr = arr.map(e => {
      if(e === "/"){
        return e = ""
      }
      if(e === "_"){
        return e = " "
      } 
      return e
    })
    console.log(routeName)
    console.log(arr.join(""))
    const findParam = arr.join("")
    switch(routeName) {
      case "/volunteers":
          dbCalls.findAll(req, res)
        break;
      case routeName:
        volType = findParam
        dbCalls.findVolType(req, res)
      break;
    }
  },
  findById: function(req, res) {
    db.Volunteer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Volunteer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Volunteer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

const dbCalls = {
  findAll: function(req, res) {
    db.Volunteer
      .find()
      .sort({ lastName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findVolType: function(req, res) {
    db.Volunteer
      .find({volunteerType: volType})
      .sort({ lastName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}