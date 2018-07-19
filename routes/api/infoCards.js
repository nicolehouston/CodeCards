const router = require("express").Router();
const infoCardsController = require("../../controllers/infoCardsController");

// Matches with "/api/users"
router.route("/")
  .get(infoCardsController.findAll)
  .post(infoCardsController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(infoCardsController.findById)
  .put(infoCardsController.update)
  .delete(infoCardsController.remove);

module.exports = router;
