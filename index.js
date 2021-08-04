const express = require('express')
const dataService = require('./services/data.service')


const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("GET METHOD")
})

app.post('/',(req,res)=>{
    res.send("POST METHOD")
})

app.put('/',(req,res)=>{
    res.send("PUT METHOD")
})

app.patch('/',(req,res)=>{
    res.send("PATCH METHOD")
})

app.delete('/',(req,res)=>{
    res.send("DELETE METHOD")
})

app.post('/register',(req,res)=>{
    console.log(req.body)

   const result = dataService.register(req.body.acno,req.body.uname,req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/login',(req,res)=>{
    console.log(req.body)

   const result = dataService.login(req.body.acno,req.body.pswd)
    res.status(result.statusCode).json(result)
})

app.post('/deposit',(req,res)=>{
    console.log(req.body)

   const result = dataService.deposit(req.body.acno,req.body.pswd,req.body.amt)
    res.status(result.statusCode).json(result)
})

app.post('/withdraw',(req,res)=>{
    console.log(req.body)

   const result = dataService.withdraw(req.body.acno,req.body.pswd,req.body.amt)
    res.status(result.statusCode).json(result)
})

app.listen(3000,()=>{
    console.log("Server Started port number: 3000 ")
})
