const Question = require("../models/question");
const Joi = require("joi");

const answer = require("../models/answers");


function validateAnswer(req, res, next) {
    const schemaAnswer = Joi.object({
        answer : Joi.required()
    });
  
    const result = schemaAnswer.validate(req.body);
  
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    } else {
      next();
    }
  }

async function createAnswer(req,res){
    const questionExists = await Question.findOne({ _id: req.params.questionid });
    
    const answers = await answer.find({ question: req.params.questionid });
    if(answers.length>=2){
      return res.status(300).send("2den fazla cevap ekleyemezsiniz")
    }
    
    if (!questionExists) {
      return res.status(400).send('Böyle bi post yok canim');
    }
    validateAnswer(req, res, () => {
    const Answer = new answer({
      answer : req.body.answer,
      question : req.params.questionid,
      active : true
    });
  
    Answer.save()
  .then(savedAnswer => {
    return Question.findByIdAndUpdate(req.params.questionid, { $push: { answer: savedAnswer._id } })
      .then(() => {
        res.send(savedAnswer);
      });
  })
  .catch(error => {
    console.log(error);
  });
    })

 }


module.exports = {
    createAnswer
}