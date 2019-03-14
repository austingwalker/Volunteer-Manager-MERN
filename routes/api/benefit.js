const router = require("express").Router();
const benefitController = require("../../controllers/benefitController");

// Matches with "/api/benefit"
router.route("/")
  .get(benefitController.findBenefit);

// Matches with "/api/benefit/:id"
router
  .route("/:id")
  .get(benefitController.findById)
  .delete(benefitController.remove);


module.exports = router;