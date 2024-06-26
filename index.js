const express = require('express')
const app = express()


const herois = ["homen aranha","hulk","ms.marvel"]

//ENDPOINT listagem de todos os herois (READ ALL -> [GET])

app.get("/heroes", function(req,res){
    res.send(herois)
})


//ENDPOINT listagem de UM heroi (Read single => [GET])
app.get("/heroes/:id", function(req,res){
    //acesar o paramentro de rota ID
    const id = req.params.id

    //Pego o item no array
    const umheroi = herois[id]

    //envio o item encontrado como resposta
    res.send(umheroi)
})


// todo o corpo da requisição virá como JSON
app.use(express.json())


// ENDPOINT de criação (CREATE => [POST])
app.post("/heroes", function(req, res){
    res.send(req.body)
})

/*
app.post()
app.put()
app.patch()
app.delete()
*/



app.listen(3000)