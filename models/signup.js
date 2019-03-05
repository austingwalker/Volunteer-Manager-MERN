const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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

signupSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

signupSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/signup.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/signup.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})


const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;