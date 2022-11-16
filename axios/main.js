
const url = "http://127.0.0.1:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, {
        name: "Celso Lopes",
        avatar: "https://picsum.photos/400/200",
        city: "Nova friburgo"
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)   
    .then(response => {
        userId.textContent = response.data.id
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


const userUpdated = {
    name: "Novo Nome",
    city: "novo endereço",
    avatar: "https://picsum.photos/400/200"
}

// Executar as funções

getUsers()
addNewUser()
//getUser(1)
//updateUser(1, userUpdated)
deleteUser(1)