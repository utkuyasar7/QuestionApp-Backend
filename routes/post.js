const express = require("express");
const router = express.Router();
const controllerQuestion = require("../controller/question")

router.get("/",controllerQuestion.getAllQuestion);

router.post("/",controllerQuestion.createQuestion);

module.exports = router;




