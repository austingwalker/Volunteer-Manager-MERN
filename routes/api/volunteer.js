const router = require("express").Router();
const volunteerController = require("../../controllers/volunteerController");

router.route("/:type")
  .get(volunteerController.discern)
  .post(volunteerController.create);


// Matches with "/api/volunteers/:id"
router
  .route("/volunteers/:id")
  .get(volunteerController.findById)
  .delete(volunteerController.remove);



module.exports = router;
