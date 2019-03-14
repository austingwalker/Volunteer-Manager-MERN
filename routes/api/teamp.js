const router = require("express").Router();
const teampController = require("../../controllers/teampController");

// Matches with "/api/coaches"
router.route("/")
  .get(teampController.findTeamp)
  // .post(teampController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(teampController.findById)
  // .put(teampController.update)
  .delete(teampController.remove);


module.exports = router;