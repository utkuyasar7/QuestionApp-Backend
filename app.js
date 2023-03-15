const config = require("./config")
const express = require("express")
const app = express()
const postRouter = require("./routes/post")
const categoryRouter= require("./routes/category")
const answerRouter = require("./routes/answer")
app.use(express.json())
const router = express.Router();

router.get('/', function(req,res){
    res.send({
        version: 1
    })
});
app.use(router)
app.use("/question",postRouter)
app.use("/category",categoryRouter)
app.use("/answer",answerRouter)

config()

app.listen(process.env.PORT,()=>{
    console.log("Çalıştım!")
})

module.exports = app;