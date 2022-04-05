const url = "http://localhost:5500/api"
//Colocar dentro do html as informações da API
function getUsers(){
    //Buscador da url
    fetch(url)
    //Se de certo ele imprime a url em formato Json
    .then(response => response.json())
    //Se de certo ele renderiza no HTML com a div id="RenderApiResult"
    .then(data => RenderApiResult.textContent = JSON.stringify(data))
    // se der erro ele printa no console
    .catch(error => console.error(error))
}
//Busca usuario
function getUser(id){
    //Busca o usuario com o ID = 1
    fetch(`${url}/${id}`)
    //Transforma a API em Json para ser lida
    .then( response => response.json())
    //Pega as propriedades do usuario da api e coloca dentro das tags no HTML 
    .then(data =>{
       // Coloca a propriedade NAME no HTML 
       userName.textContent = data.name
       // Coloca a propriedade City no HTML
       userCity.textContent = data.city
       // Coloca a propriedade AVATAR dentro da img src no HTML
       userAvatar.src = data.avatar

    })
    .catch(error => console.error(error))

}
//Função para adicionar um usuario novo na api
function addUse(newUser){
    // Buscar a url passando o metodo POST(add usuario) e pegando o conteudo da const NEWUSERS
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch
}   
//Função para atualizar o Usuario
function updateUser(UpdateUser, id){
    fetch(`${url}/9`,{
        method: "PUT", 
        body: JSON.stringify(UpdateUser),
        headers:{
           "Content-type": "application/json; charset=UTF-8"
        }
        
    })
    .then(response =>  response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// Criando um usuario em formato de json/Objeto
const newUser = {
    name: "PabloMezak",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Fortaleza"
}
//Atualização para mandar para o usuario
const UpdateUser = {
    name: "GIGA CHAD",
    avatar: "http://lorempixel.com.br/400/200",
    city: "chadlandia"
}
updateUser(UpdateUser , 5)
//addUse(newUser)
getUser(9)
getUsers()

