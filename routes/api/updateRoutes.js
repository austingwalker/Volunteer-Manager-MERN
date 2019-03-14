const router = require("express").Router();
const updateController = require("../../controllers/updateController");

// Matches with "/api/update"
router.route("/")
  .put(updateController.update);


module.exports = router;