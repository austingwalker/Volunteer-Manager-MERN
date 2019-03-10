const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/volunteerManager"
);

const volunteerSeed = [
  {
    firstName: "Austin",
    lastName: "Wills",
    email: "austin@austin.com",
    gender: "male",
    volunteerType: ["Coach", ", ", "Umpire"],
    date: new Date(Date.now())
  },
  {
    firstName: "Lauren",
    lastName: "Wills",
    email: "Lauren@Lauren.com",
    gender: "female",
    volunteerType: ["Staff", ", ", "Gameday Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Charlie",
    lastName: "Conner",
    email: "Charlie@Charlie.com",
    gender: "male",
    volunteerType: ["Coach", ", ", "Field Maintenance"],
    date: new Date(Date.now())
  },
  {
    firstName: "Emily",
    lastName: "Conner",
    email: "emily@emily.com",
    gender: "female",
    volunteerType: ["Coach", ", ", "Gameday Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Alex",
    lastName: "Larson",
    email: "Alex@Alex.com",
    gender: "male",
    volunteerType: ["Umpire"],
    date: new Date(Date.now())
  },
  {
    firstName: "Jenna",
    lastName: "Larson",
    email: "Jenna@Jenna.com",
    gender: "female",
    volunteerType: ["Coach", ", ", "Team Parent"],
    date: new Date(Date.now())
  },
  {
    firstName: "John",
    lastName: "Newport",
    email: "John@John.com",
    gender: "male",
    volunteerType: ["Mentor"],
    date: new Date(Date.now())
  },
  {
    firstName: "Gina",
    lastName: "Markham",
    email: "Gina@Gina.com",
    gender: "female",
    volunteerType: ["Coach", ", ", "Benefit Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Mal",
    lastName: "Baker",
    email: "mal@mal.com",
    gender: "female",
    volunteerType: ["Coach", ", ", "Benefit Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Matt",
    lastName: "Parker",
    email: "mat@mat.com",
    gender: "make",
    volunteerType: ["Coach", ", ", "Gameday Volunteer", ", ", "Staff", ", ", "Umpire", ", ", "Mentor", ", ", "Field Maintenance"],
    date: new Date(Date.now())
  },
  {
    firstName: "Lizzy",
    lastName: "Parker",
    email: "liz@liz.com",
    gender: "female",
    volunteerType: ["Coach", ", ", "Mentor"],
    date: new Date(Date.now())
  },
  {
    firstName: "Cecil",
    lastName: "Lombardi",
    email: "cecil@cecil.com",
    gender: "male",
    volunteerType: ["Coach", ", ", "Team Parent"],
    date: new Date(Date.now())
  },
  {
    firstName: "Davida",
    lastName: "Lombardi",
    email: "davida@davida.com",
    gender: "female",
    volunteerType: ["Team Parent", ", "],
    date: new Date(Date.now())
  },
  
];

db.Volunteer
  .remove({})
  .then(() => db.Volunteer.collection.insertMany(volunteerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
