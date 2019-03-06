const router = require("express").Router();
const umpireController = require("../../controllers/umpireController");

// Matches with "/api/coaches"
router.route("/")
  .get(umpireController.findCoaches)
  .post(umpireController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(umpireController.findById)
  .put(umpireController.update)
  .delete(umpireController.remove);


module.exports = router;