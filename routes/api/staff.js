const router = require("express").Router();
const staffController = require("../../controllers/staffController");

// Matches with "/api/coaches"
router.route("/")
  .get(staffController.findStaff)
  // .post(staffController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(staffController.findById)
  // .put(staffController.update)
  .delete(staffController.remove);


module.exports = router;