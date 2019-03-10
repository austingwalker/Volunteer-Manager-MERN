const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
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
  date: { type: Date, default: Date.now }
});



const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
