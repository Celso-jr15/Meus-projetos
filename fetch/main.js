//const { response } = require("express")

const url = "http://127.0.0.1:5500/api/"

function getUsers(){
    fetch (url)
    .then(response => response.json)
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(console.error))
}

function getUser(){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(console.error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(console.error))

}

function updateUser (updateUser){
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UFT-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(console.error))
}


const updateUser = {
    name: "Novo nome",
    avatar: "https://picsum.photos/400/200",
    city: "Nova Cidade"
}

const newUser = {
    name: "Celso Lopes 2",
    avatar: "https://picsum.photos/400/200",
    city: "Nova Friburgo"
}

addUser(newUser)

updateUser()

getUsers()
getUser()