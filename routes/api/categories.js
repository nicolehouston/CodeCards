const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");

// Matches with "/api/users"
router.route("/")
  .get(categoriesController.findAll)
  .post(categoriesController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(categoriesController.findById)
  .put(categoriesController.update)
  .delete(categoriesController.remove);

module.exports = router;
