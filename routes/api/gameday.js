const router = require("express").Router();
const gamedayController = require("../../controllers/gamedayController");

// Matches with "/api/coaches"
router.route("/")
  .get(gamedayController.findGameday)
  // .post(gamedayController.create);

// Matches with "/api/coaches/:id"
router
  .route("/:id")
  .get(gamedayController.findById)
  // .put(gamedayController.update)
  .delete(gamedayController.remove);


module.exports = router;