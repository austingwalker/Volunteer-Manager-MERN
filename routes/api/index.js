const router = require("express").Router();
const volunteerRoutes = require("./volunteer");

// Volunteer routes
router.use("/volunteers", volunteerRoutes);

module.exports = router;
