const router = require("express").Router();
const volunteerController = require("../../controllers/volunteerController");

console.log("volunteer router hit")
// Matches with "/api/volunteers"
router.route("/")
  .get(volunteerController.findAll)
  .post(volunteerController.create);

// Matches with "/api/volunteers/:id"
router
  .route("/:id")
  .get(volunteerController.findById)
  .delete(volunteerController.remove);

 

module.exports = router;
