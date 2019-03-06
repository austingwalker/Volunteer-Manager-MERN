const router = require("express").Router();
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const volunteerRoutes = require("./volunteer");
const coachRoutes = require("./coach");
const gamedayRoutes = require("./gameday");
const fieldmhRoutes = require("./fieldm");
const teampRoutes = require("./teamp");
const mentorsRoutes = require("./mentors");
const benefitRoutes = require("./benefit");
const staffRoutes = require("./staff");


// Volunteer routes
router.use("/volunteers", volunteerRoutes);

router.use("/coaches", coachRoutes);

router.use("/gameday", gamedayRoutes);

router.use("/fieldm", fieldmhRoutes);

router.use("/teamp", teampRoutes);

router.use("/mentors", mentorsRoutes);

router.use("/benefit", benefitRoutes);

router.use("/staff", staffRoutes);

router.use("/signup", signupRoutes);

router.use("/login", loginRoutes);

module.exports = router;
