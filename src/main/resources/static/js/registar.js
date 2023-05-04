document.addEventListener("DOMContentLoaded", () => {
    // on ready
});

async function registrarUsuario() {

    let datos = {};

    datos.nombre = document.getElementById("nombre").value;
    datos.apellido = document.getElementById("apellido").value;
    datos.email = document.getElementById("email").value;
    datos.telefono = document.getElementById("telefono").value;
    datos.password = document.getElementById("password").value;

    const requets = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)

    });

    alert("la cuenta fue creada con exito");
    window.location.href = 'login.html';

}
