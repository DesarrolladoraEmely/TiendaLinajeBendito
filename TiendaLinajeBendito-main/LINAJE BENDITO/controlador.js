let inputNombre=document.getElementById("nombre")
let inputCorreo=document.getElementById("correo")
let inputContraseña=document.getElementById("contraseña")
let botonFormulario=document.getElementById("boton")

botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
    
    let nombre=inputNombre.value
    let correo=inputCorreo.value
    let contraseña=inputContraseña.value
    let nombreBaseDatos="Emely"
    let correoBaseDatos="emely@gmail.com"
    let contraseñaBaseDatos="123456"


    if(nombre==nombreBaseDatos && correo==correoBaseDatos && contraseña==contraseñaBaseDatos){
        Swal.fire({
            title: "Buen trabajo!",
            text: "Bienvenida " +nombre,
            icon: "success"
          });
          window.location.href=("./productos.html")
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: nombre+ "Revisa tus datos, por favor",
            
          });
    }


})