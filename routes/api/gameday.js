const router = require("express").Router();
const gamedayController = require("../../controllers/gamedayController");

// Matches with "/api/gameday"
router.route("/")
  .get(gamedayController.findGameday)

// Matches with "/api/gameday/:id"
router
  .route("/:id")
  .get(gamedayController.findById)
  .delete(gamedayController.remove);


module.exports = router;