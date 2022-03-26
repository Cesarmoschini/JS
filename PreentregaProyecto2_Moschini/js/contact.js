/*CONTACTOS*/
function enviarForm(){
    var nombreForm = document.getElementById("nombre").value;
    var apellidoForm = document.getElementById("apellido").value;
    var edadForm = document.getElementById("edad").value;
    var mailForm = document.getElementById("mail").value;
    var comentarioForm = document.getElementById("comentario").value;
    console.log(`Nombre completo: ${apellidoForm.toUpperCase().trim()}, ${nombreForm.trim()}`);
    console.log(`La edad es de ${edadForm}`)
    console.log(`Mail: ${mailForm}`);
    console.log(`El comentario hecho es: ${comentarioForm}`);
}