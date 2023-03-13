const mongoose = require("mongoose")
const categories = require("./category")
const questionSchema = mongoose.Schema({
    title : String,
    description : String,    
    date :{
        type :Date,
        default:Date.now
    },
    category: {
        type :mongoose.Schema.Types.ObjectId,
        ref:"categories" 
    },
    answer : [{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Answer"
    }]
})

module.exports = mongoose.model("Question",questionSchema)
