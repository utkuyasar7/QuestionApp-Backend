const category = require("../models/category");
const Joi = require("joi");

function validateCategory(req, res, next) {
  const schemaCategory = Joi.object({
    name: Joi.string().min(4).required(),
  });

  const result = schemaCategory.validate(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  } else {
    next();
  }
}

async function getAllCategory(req, res) {
  const Category = await category.find();
  res.send(Category);
}

function createCategory(req, res) {
  validateCategory(req, res, () => {
    const Category = new category({
      name: req.body.name,
    });

    Category.save()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Something went wrong");
      });
  });
}

module.exports = {
  getAllCategory,
  createCategory,
};
