const express = require("express");
const router = express.Router();

const { createStudent, getStudent } = require("./studentController");

router.post("/", createStudent);
router.get("/", getStudent);

module.exports = router;
