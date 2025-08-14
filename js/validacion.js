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
        return false;
    } else {
        return true;
    }
}

elBoton.addEventListener("click", sinCamposVacios);

function validarPassword(){

    if(elPassword.value === elPasswordRepetido.value){
        return true;
    }else{
        return false;
    }
}

function validarLargo (){
   const password1 = elPassword.value;
   if(password1.length > 5) {
       return true;
   } else {
       return false;
   }
}

document.getElementById("regBtn").addEventListener("click", function() {
   if (validarLargo() && validarPassword() && sinCamposVacios()){
      showAlertSuccess();
   } else {
      showAlertError() 
   }
});