document.addEventListener("DOMContentLoaded", () => {
    cargarUsuarios();
});

async function cargarUsuarios() {

    const requets = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
    });
    const usuarios = await requets.json();
    console.log(usuarios);


    let listadoHtml = '';

    for (let usuario of usuarios){

        let usuarioHtml = '<tr>' +
            '                <td>'+usuario.id+'</td>' +
            '                <td>'+usuario.nombre+' '+usuario.apellido+' </td>' +
            '                <td>'+usuario.email+'</td>' +
            '                <td>'+usuario.telefono+'</td>' +
            '                <td> <button>Editar</button> <br>' +
            '                    <button onclick="eliminarUsuario('+ usuario.id +')">Eliminar</button>' +
            '                </td>' +
            '            </tr>';

        listadoHtml+= usuarioHtml;

    }

    document.querySelector('#usuarios tbody').outerHTML = listadoHtml

}

function getHeaders(){

    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }

}

async function eliminarUsuario(id){

    if (!confirm('¿Desea eliminar este usuario?')){
        return;
    }

    const requets = await fetch('api/usuario/' + id, {
        method: 'DELETE',
        headers: getHeaders()
    });

    location.reload();
}
