const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hello Wordl")
})

app.get("/ptbr", function(req, res){
    res.send("Olá Mundo")
})

app.post()
app.put()
app.patch()
app.delete()



app.listen(3000)