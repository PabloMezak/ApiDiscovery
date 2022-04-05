const express = require("express")
const axios = require("axios")

const app = express()

//Pega a API e mostra apenas a foto
app.get("/", function(req,res){
    
    axios.get("https://api.github.com/users/pablomezak")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))

})
app.listen('8080')
console.log('rodou')