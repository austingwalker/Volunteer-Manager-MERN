const router = require("express").Router();
const umpireController = require("../../controllers/umpireController");

// Matches with "/api/umpires"
router.route("/")
  .get(umpireController.findUmpires)


// Matches with "/api/umpires/:id"
router
  .route("/:id")
  .get(umpireController.findById)
  .delete(umpireController.remove);


module.exports = router;