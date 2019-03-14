const router = require("express").Router();
const staffController = require("../../controllers/staffController");

// Matches with "/api/staff"
router.route("/")
  .get(staffController.findStaff);

// Matches with "/api/staff/:id"
router
  .route("/:id")
  .get(staffController.findById)
  .delete(staffController.remove);


module.exports = router;