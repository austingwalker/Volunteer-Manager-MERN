const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/volunteerManager"
);

const volunteerSeed = [
  {
    name: "Austin",
    email: "austin@austin.com",
    volunteerType: ["coach", "umpire"],
    gender: "male",
    password: "1234",
    date: new Date(Date.now())
  },
  {
    name: "Lauren",
    email: "Lauren@Lauren.com",
    volunteerType: ["staff", "game day"],
    gender: "female",
    password: "5678",
    date: new Date(Date.now())
  },
  {
    name: "Charlie",
    email: "Charlie@Charlie.com",
    volunteerType: ["coach", "field maintenance"],
    gender: "male",
    password: "91011",
    date: new Date(Date.now())
  },
  {
    name: "Alex",
    email: "Alex@Alex.com",
    volunteerType: ["umpire"],
    gender: "male",
    password: "abc",
    date: new Date(Date.now())
  },
  {
    name: "Jenna",
    email: "Jenna@Jenna.com",
    volunteerType: ["coach", "team parent"],
    gender: "female",
    password: "def",
    date: new Date(Date.now())
  },
  {
    name: "John",
    email: "John@John.com",
    volunteerType: ["mentor"],
    gender: "male",
    password: "ghi",
    date: new Date(Date.now())
  },
  {
    name: "Gina",
    email: "Gina@Gina.com",
    volunteerType: ["coach", "benefit"],
    gender: "female",
    password: "jkl",
    date: new Date(Date.now())
  },
  {
    name: "Mal",
    email: "mal@mal.com",
    volunteerType: ["coach", "benefit"],
    gender: "female",
    password: "mnop",
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
