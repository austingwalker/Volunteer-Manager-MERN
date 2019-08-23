const router = require("express").Router();
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const volunteerRoutes = require("./volunteer");
const updateRoutes = require("./updateRoutes");


//Volunteer routes
router.use("/", volunteerRoutes);

// Update
router.use("/update", updateRoutes);

// Signup & Login
router.use("/signup", signupRoutes);

router.use("/login", loginRoutes);

module.exports = router;
