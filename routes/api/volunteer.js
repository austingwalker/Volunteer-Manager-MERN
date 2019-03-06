const router = require("express").Router();
const volunteerController = require("../../controllers/volunteerController");

// Matches with "/api/volunteers"
router.route("/")
  .get(volunteerController.findAll)
  .post(volunteerController.create);

// Matches with "/api/volunteers/:id"
router
  .route("/:id")
  .get(volunteerController.findById)
  .put(volunteerController.update)
  .delete(volunteerController.remove);

  // Matches with "/api/volunteers/coaches"
  router
  .route("/coaches")
  .get(volunteerController.findAllCoaches)
  .put(volunteerController.update)
  .delete(volunteerController.remove);

module.exports = router;
