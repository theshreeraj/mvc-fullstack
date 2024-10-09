const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const productRouter = require("./routes/products.js");


const app = express()
const PORT = 8000


// middlewares
app.use(express.json())
app.use(cors())


// database connection
connectDB();


// home route
app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.use("/products",productRouter)



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})