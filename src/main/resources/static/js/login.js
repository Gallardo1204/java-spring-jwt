document.addEventListener("DOMContentLoaded", () => {
    // on ready
});

async function iniciarSesion() {

    let datos = {};

    datos.email = document.getElementById("email").value;
    datos.password = document.getElementById("password").value;

    const requets = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)

    });
    const respuesta = await requets.text();

    if(respuesta != 'Fail' ){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        window.location.href = 'usuarios.html';
    } else {
        alert('las credenciales son incorrectas. Por favor intente de nuevo')
    }

}
