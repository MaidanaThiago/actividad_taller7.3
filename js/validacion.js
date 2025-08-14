function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let elBoton = document.getElementById("regBtn")
let elNombre = document.getElementById("nombre");
let elApellido = document.getElementById("apellido");
let elEmail = document.getElementById("email");
let elPassword = document.getElementById("password1");
let elPasswordRepetido = document.getElementById("password2");

function sinCamposVacios(){
    if (elNombre.value === "" || elApellido.value === "" || elEmail.value === "" || elPassword.value === "" || elPasswordRepetido.value === ""){
        console.log("¡Hay campos vacíos en el formulario!");
        showAlertError();
    } else {
        console.log("¡Formulario completo!");
    }
}

elBoton.addEventListener("click", sinCamposVacios);


