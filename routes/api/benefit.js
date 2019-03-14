const router = require("express").Router();
const benefitController = require("../../controllers/benefitController");

// Matches with "/api/coaches"
router.route("/")
  .get(benefitController.findBenefit)
  // .post(benefitController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(benefitController.findById)
  // .put(benefitController.update)
  .delete(benefitController.remove);


module.exports = router;