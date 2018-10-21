// PETICION POST
// https://reqres.in/api/users

let usuario = {
    nombre: 'Nuria',
    edad: 28
}

fetch('https://reqres.in/api/', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });