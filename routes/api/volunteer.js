const router = require("express").Router();
const volunteerController = require("../../controllers/volunteerController");

// Matches with "/api/books"
router.route("/")
  .get(volunteerController.findAll)
  .post(volunteerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(volunteerController.findById)
  .put(volunteerController.update)
  .delete(volunteerController.remove);

module.exports = router;
