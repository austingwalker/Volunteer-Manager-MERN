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
    gender: "Male",
    volunteerType: ["Coach", "Umpire"],
    date: new Date(Date.now())
  },
  {
    firstName: "Lauren",
    lastName: "Wills",
    email: "Lauren@Lauren.com",
    gender: "Female",
    volunteerType: ["Staff", "Gameday Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Charlie",
    lastName: "Conner",
    email: "Charlie@Charlie.com",
    gender: "Male",
    volunteerType: ["Coach", "Field Maintenance"],
    date: new Date(Date.now())
  },
  {
    firstName: "Emily",
    lastName: "Conner",
    email: "emily@emily.com",
    gender: "Female",
    volunteerType: ["Coach", "Gameday Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Alex",
    lastName: "Larson",
    email: "Alex@Alex.com",
    gender: "Male",
    volunteerType: ["Umpire"],
    date: new Date(Date.now())
  },
  {
    firstName: "Jenna",
    lastName: "Larson",
    email: "Jenna@Jenna.com",
    gender: "Female",
    volunteerType: ["Coach", "Team Parent"],
    date: new Date(Date.now())
  },
  {
    firstName: "John",
    lastName: "Newport",
    email: "John@John.com",
    gender: "Male",
    volunteerType: ["Mentor"],
    date: new Date(Date.now())
  },
  {
    firstName: "Gina",
    lastName: "Markham",
    email: "Gina@Gina.com",
    gender: "Female",
    volunteerType: ["Coach", "Benefit Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Mal",
    lastName: "Baker",
    email: "mal@mal.com",
    gender: "Female",
    volunteerType: ["Coach", "Benefit Volunteer"],
    date: new Date(Date.now())
  },
  {
    firstName: "Matt",
    lastName: "Parker",
    email: "mat@mat.com",
    gender: "Male",
    volunteerType: ["Coach", ", ", "Gameday Volunteer", "Staff", "Umpire", "Mentor", "Field Maintenance"],
    date: new Date(Date.now())
  },
  {
    firstName: "Lizzy",
    lastName: "Parker",
    email: "liz@liz.com",
    gender: "Female",
    volunteerType: ["Coach", "Mentor"],
    date: new Date(Date.now())
  },
  {
    firstName: "Cecil",
    lastName: "Lombardi",
    email: "cecil@cecil.com",
    gender: "Male",
    volunteerType: ["Coach", "Team Parent"],
    date: new Date(Date.now())
  },
  {
    firstName: "Davida",
    lastName: "Lombardi",
    email: "davida@davida.com",
    gender: "Female",
    volunteerType: ["Team Parent"],
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
