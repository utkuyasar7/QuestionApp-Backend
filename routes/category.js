const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category")

const question = require("../models/question")


router.get("/",categoryController.getAllCategory)
router.get("/:categoryId/", async(req,res)=>{
    const questions = await question.find({ category: req.params.categoryId });
    res.send(questions);
});
router.post("/", categoryController.createCategory);
  
  module.exports = router;