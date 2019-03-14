const router = require("express").Router();
const fieldmController = require("../../controllers/fieldmController");

// Matches with "/api/fieldm"
router.route("/")
  .get(fieldmController.findFieldm);

// Matches with "/api/fieldm/:id"
router
  .route("/:id")
  .get(fieldmController.findById)
  .delete(fieldmController.remove);


module.exports = router;