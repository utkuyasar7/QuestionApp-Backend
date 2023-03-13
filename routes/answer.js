const express = require("express");
const router = express.Router();
const answerController = require("../controller/answer")




  
  router.post("/:questionid", answerController.createAnswer);


  module.exports = router