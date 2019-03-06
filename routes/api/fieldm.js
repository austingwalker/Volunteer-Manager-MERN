const router = require("express").Router();
const fieldmController = require("../../controllers/fieldmController");

// Matches with "/api/coaches"
router.route("/")
  .get(fieldmController.findCoaches)
  .post(fieldmController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(fieldmController.findById)
  .put(fieldmController.update)
  .delete(fieldmController.remove);


module.exports = router;