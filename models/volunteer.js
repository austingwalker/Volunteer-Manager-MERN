const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  gender: { 
    type: String, 
    required: true 
  },
  volunteerType: { 
    type: Array, 
    required: true 
  },
  password: { 
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  date: { type: Date, default: Date.now }
});



const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
