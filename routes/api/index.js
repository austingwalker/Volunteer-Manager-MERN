const router = require("express").Router();
const volunteerRoutes = require("./volunteer");
const signupRoutes = require("./signup");
const loginRoutes = require("./login");

// Volunteer routes
router.use("/volunteers", volunteerRoutes);

router.use("/signup", signupRoutes);

router.use("/login", loginRoutes);

module.exports = router;
