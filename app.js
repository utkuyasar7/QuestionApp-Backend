const config = require("./config")
const express = require("express")
const app = express()
const postRouter = require("./routes/post")
const categoryRouter= require("./routes/category")
const answerRouter = require("./routes/answer")
app.use(express.json())

app.use("/deneme",postRouter)
app.use("/category",categoryRouter)
app.use("/answer",answerRouter)
config()





app.listen(process.env.PORT,()=>{
    console.log("Çalıştım!")
})








