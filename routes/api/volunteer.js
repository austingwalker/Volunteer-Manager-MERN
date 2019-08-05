const router = require("express").Router();
const volunteerController = require("../../controllers/volunteerController");

router.route("/:type")
  .get(volunteerController.discern)
  .post(volunteerController.create);

// ---------------------------------------------

// Matches with "/api/volunteers/:id"
router
  .route("/volunteers/:id")
  .get(volunteerController.findById)
  .delete(volunteerController.remove);



// Origional 
// --------------------------------------------------------
// Matches with "/api/volunteers"
// router.route("/")
//   .get(volunteerController.findAll)
//   .post(volunteerController.create);

// Matches with "/api/volunteers/:id"
// router
//   .route("/:id")
//   .get(volunteerController.findById)
//   .delete(volunteerController.remove);
// --------------------------------------------------------
 

module.exports = router;
