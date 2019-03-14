const router = require("express").Router();
const coachController = require("../../controllers/coachController");

// Matches with "/api/coaches"
router.route("/")
  .get(coachController.findCoaches)
  // .post(coachController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(coachController.findById)
  // .put(coachController.update)
  .delete(coachController.remove);


module.exports = router;