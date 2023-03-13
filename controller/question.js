const categories = require("../models/category");
const Question = require("../models/question");
const Joi = require("joi");

const answer = require("../models/answers")

function validateQuestion(req, res, next) {
    const schemaQuestion = Joi.object({
      title: Joi.string().min(5).required(),
      description: Joi.string().min(20).required(),
      category: Joi.string().required(),
     answer :Joi.array().items(Joi.string()).length(2)
    });
  
    const result = schemaQuestion.validate(req.body);
  
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    } else {
      next();
    }
  }


async function getAllQuestion(req,res){

    const question = await Question.find()
   
  res.send(question);

}

async function createQuestion(req,res){
    const categoryExists = await categories.findOne({ _id: req.body.category });
    
    if (!categoryExists) {
      return res.status(400).send('category yok canim');
    }
    validateQuestion(req, res, () => {
    const question = new Question({
      title: req.body.title,
      description: req.body.description,
      category :req.body.category,


    
    
    
      
    });
    question.save()
    .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Something went wrong");
      });
})
}
module.exports={
    getAllQuestion,
    createQuestion
}

