const router = require("express").Router();
const teampController = require("../../controllers/teampController");

// Matches with "/api/teamp"
router.route("/")
  .get(teampController.findTeamp);

// Matches with "/api/teamp/:id"
router
  .route("/:id")
  .get(teampController.findById)
  .delete(teampController.remove);


module.exports = router;