const express = require('express')
const dotenv=require('dotenv');
dotenv.config();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("Listening to the twitter ")
})

app.get("/login",(req,res)=>{
res.send('<h1>Login here</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})