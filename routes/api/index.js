const router = require("express").Router();
const userRoutes = require("./users");
// const categoryRoutes = require("./categories");

// User routes
router.use("/users", userRoutes);

// Category routes
// router.use("/categories", categoryRoutes);

module.exports = router;