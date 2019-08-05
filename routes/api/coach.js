const router = require("express").Router();
const coachController = require("../../controllers/coachController");


// Matches with "/api/coaches"
router.route("/")
  .get(coachController.findCoaches);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(coachController.findById)
  .delete(coachController.remove);


module.exports = router;