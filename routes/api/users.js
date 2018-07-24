const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:name")
  .get(usersController.findByName)
  .put(usersController.saveCategory)
  .delete(usersController.deleteCategory);

  router
    .route("/:name/addCard")
    .put(usersController.addInfoCard);
  
module.exports = router;