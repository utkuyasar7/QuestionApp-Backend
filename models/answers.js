
const mongoose = require("mongoose")
const answersSchema = mongoose.Schema({
    answer : String,
    active : Boolean,
    question : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"Question",
        required:true
    }
})

module.exports = mongoose.model("Answer",answersSchema)
