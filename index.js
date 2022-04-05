const express = require("express");
const { listen } = require("express/lib/application");

const app = express()

//middçewere - transformar tudo em Json
app.use(express.json())

//renderizar informaçoes
app.get("/PaginaInicial",  (req , res) => {
    res.send("Ola")
})

// postar informaçoes tipo : Cadastro
app.post("/cadastro",  function (req, res) {
    res.send(req.body)
})

//Atualizar informaçoes 
let name = "Pablo"
app.put("/", function(req, res){
    name = req.body.name
    res.send(name)
})
app.get("/", function(req,res){
    res.send(name)
})

//Apagar Algo.. Params serve para pegar o /:ID
app.delete("/:id", function (req,res){
    res.send(req.params.id)
})

app.listen('8080')
console.log("iniciei")