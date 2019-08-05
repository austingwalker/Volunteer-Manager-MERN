const router = require("express").Router();
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const volunteerRoutes = require("./volunteer");
const updateRoutes = require("./updateRoutes");
// const coachRoutes = require("./coach");
// const gamedayRoutes = require("./gameday");
// const fieldmhRoutes = require("./fieldm");
// const umpireRoutes = require("./umpires");
// const teampRoutes = require("./teamp");
// const mentorsRoutes = require("./mentors");
// const benefitRoutes = require("./benefit");
// const staffRoutes = require("./staff");


// Test
router.use("/", volunteerRoutes);

// router.use("/coaches", volunteerRoutes);

// router.use("/gameday", volunteerRoutes);

// router.use("/fieldm", volunteerRoutes);

// router.use("/umpires", volunteerRoutes);

// router.use("/teamp", volunteerRoutes);

// router.use("/mentors", volunteerRoutes);

// router.use("/benefit", volunteerRoutes);

// router.use("/staff", volunteerRoutes);


// //origionals
// router.use("/volunteers", volunteerRoutes);

// router.use("/coaches", coachRoutes);

// router.use("/gameday", gamedayRoutes);

// router.use("/fieldm", fieldmhRoutes);

// router.use("/umpires", umpireRoutes);

// router.use("/teamp", teampRoutes);

// router.use("/mentors", mentorsRoutes);

// router.use("/benefit", benefitRoutes);

// router.use("/staff", staffRoutes);

// Update
router.use("/update", updateRoutes);

// Signup & Login
router.use("/signup", signupRoutes);

router.use("/login", loginRoutes);

module.exports = router;
