const router = require("express").Router();
const mentorController = require("../../controllers/mentorController");

// Matches with "/api/mentors"
router.route("/")
  .get(mentorController.findMentors);

// Matches with "/api/mentors/:id"
router
  .route("/:id")
  .get(mentorController.findById)
  .delete(mentorController.remove);


module.exports = router;