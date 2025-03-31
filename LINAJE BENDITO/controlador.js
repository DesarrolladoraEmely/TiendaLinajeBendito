let inputNombre=document.getElementById("nombre")
let inputCorreo=document.getElementById("correo")
let inputContraseña=document.getElementById("contraseña")
let botonFormulario=document.getElementById("boton")

botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()

    let correo=inputCorreo.value
    let contraseña=inputContraseña.value

    let resultado=document.getElementById("resultado")

})