const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const {form } = require("./controllers/FormController");

const fs = require("fs");

router.get("/", getCV);
router.get("/info", form);

module.exports = router;
