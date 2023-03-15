const config = require("./config")
const express = require("express")
const app = express()
// const postRouter = require("./routes/post")
// const categoryRouter= require("./routes/category")
// const answerRouter = require("./routes/answer")

app.use(express.json())

app.get('/', function(req,res){
    res.send({
        version: 1
    })
});
// app.use("/question",postRouter)
// app.use("/category",categoryRouter)
// app.use("/answer",answerRouter)

config()

app.listen(process.env.PORT | 80,()=>{
    console.log("Çalıştım!")
})

module.exports = app;