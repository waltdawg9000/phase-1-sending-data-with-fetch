// Add your code here
const mainUrl = "http://localhost:3000/users"
 
const bodyTag = document.querySelector('body')

let dataBody = {
    name: "Steve",
    email: "steve@steve.com"
}

let configObjects = {
    method: "Post",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(dataBody)
}

function submitData() {
    return fetch(mainUrl, configObjects)
    .then(response => response.json())
    .then(getID)
    .catch(errorFunc)
}

function getID(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error){
    document.body.innerHTML = error.message
}