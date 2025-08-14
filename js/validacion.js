function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function validarPassword(){
    const contraseña = document.getElementById("password1").value;
    const repitecontraseña = document.getElementById("password2").value;

    if(contraseña === repitecontraseña){
        return true;
    }else{
        return false;
    }
}

