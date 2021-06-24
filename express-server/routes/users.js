var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

// POST a New User
router.post("/", function (req, res, next) {});

// GET a Single User by id
router.get("/:id", function (req, res, next) {});

// UPDATE a User
router.patch("/:id", function (req, res, next) {});

// DELETE a User
router.delete("/:id", function (req, res, next) {});

module.exports = router;
