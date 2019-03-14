const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/coaches"
router.route("/")
  .get(mentorController.findMentors)
  // .post(mentorController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(mentorController.findById)
  // .put(mentorController.update)
  .delete(mentorController.remove);


module.exports = router;