/*CONTACTOS*/
function enviarForm(){
    var nombreForm = document.getElementById("nombre").value;
    var apellidoForm = document.getElementById("apellido").value;
    var edadForm = document.getElementById("edad").value;
    var mailForm = document.getElementById("mail").value;
    var comentarioForm = document.getElementById("comentario").value;
    console.log(`Nombre completo: ${apellidoForm.toUpperCase().trim()}, ${nombreForm.trim()}`);
    console.log(`La edad es de ${edadForm}`);
    console.log(`Mail: ${mailForm}`);
    console.log(`El comentario hecho es: ${comentarioForm}`);
};

var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
        <h3> ${data.results['0'].name.first} ${data.results['0'].name.last}</h3>
        <h4> ${data.results['0'].location.city}, ${data.results['0'].location.state}</h4>
        `
    })
}

setInterval('traer()',2000);